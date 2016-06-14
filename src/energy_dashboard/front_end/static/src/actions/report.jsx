import jQuery from 'jquery';

export const INVALIDATE_REPORT = 'INVALIDATE_REPORT';
export function invalidateReport(powerMeterId) {
    return {
        type: INVALIDATE_REPORT,
        powerMeterId
    }
}

export const FETCH_REPORT = 'FETCH_REPORT';
export function fetchReport(powerMeterId) {
    return {
        type: FETCH_REPORT,
        powerMeterId
    }
}

export const FETCH_REPORT_SUCCESS = 'FETCH_REPORT_SUCCESS';
export function fetchReportSuccess(powerMeterId, report, start, end, stepSize) {
    return {
        type: FETCH_REPORT_SUCCESS,
        powerMeterId,
        report,
        start,
        end,
        stepSize
    }
}

export const FETCH_REPORT_FAILED = 'FETCH_REPORT_FAILED';
export function fetchReportFailed(powerMeterId, error) {
    return {
        type: FETCH_REPORT_FAILED,
        powerMeterId,
        error
    }
}

export function receiveReportsIfNeeded() {
    return function(dispatch, getState) {
        const state = getState();
        let stepSize = null,
            start = new Date(),
            end = new Date();
        start.setSeconds(0, 0);
        end.setSeconds(0, 0);

        switch (state.reportPeriod.period) {
            case 'day':
                start.setDate(start.getDate() - 1); // Yesterday
                stepSize = 'minute';
                break;
            case 'week':
                start.setDate(start.getDate() - 7); // Last week
                start.setMinutes(0);
                end.setMinutes(0);
                stepSize = 'hour';
                break;
            case 'month':
                start.setMonth(start.getMonth() - 1); // Last month
                start.setHours(0, 0, 0, 0);
                end.setHours(0, 0, 0, 0);
                stepSize = 'day';
                break;
            case 'year':
                start.setFullYear(start.getFullYear() - 1); // Last year
                start.setHours(0, 0, 0, 0);
                end.setHours(0, 0, 0, 0);
                start.setDate(1);
                end.setDate(1);
                stepSize = 'month';
                break;
        }

        Promise.all(
            Object.keys(state.powerMeter.powerMetersById).map(function(id){
                if (shouldReceiveReport(state, id, stepSize, start, end)){
                    return dispatch(receiveReport(id, stepSize, start, end));
                } else {
                    return Promise.resolve();
                }
            })
        );
    }
}

function shouldReceiveReport(state, powerMeterId, stepSize, start, end) {
    const powerMeter = state.powerMeter.powerMetersById[powerMeterId];
    if (!powerMeter || !powerMeter.isSelected) {
        return false;
    }

    const report = state.report[powerMeterId];
    if (!report) {
        return true;
    } else if ( report.stepSize == stepSize || report.start == start || report.end == end ) {
        return false;
    }
    return true;
}

function receiveReport(powerMeterId, stepSize, start, end) {
    return function(dispatch) {
        // Notice a new fetch report
        dispatch(fetchReport(powerMeterId));

        return jQuery.ajax({
            url: `/api/reading-report/${powerMeterId}/${stepSize}/${start.toISOString()}/${end.toISOString()}/`,
            dataType: 'json',
            success: function(data) {
                dispatch(fetchReportSuccess(powerMeterId, data, start, end, stepSize));
            },
            error: function(xhr, status, err) {
                dispatch(fetchReportFailed(powerMeterId, err));
            }
        });
    }
}
