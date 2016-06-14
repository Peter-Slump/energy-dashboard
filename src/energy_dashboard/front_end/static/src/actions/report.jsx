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
export function fetchReportSuccess(powerMeterId, report, start, end, interval) {
    return {
        type: FETCH_REPORT_SUCCESS,
        powerMeterId,
        report,
        start,
        end,
        interval
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
        let interval = null,
            start = new Date(),
            end = new Date();

        start.setMilliseconds(0);
        end.setMilliseconds(0);

        switch (state.reportPeriod.period) {
            case 'day':
                start.setDate(start.getDate() - 1); // Yesterday
                interval = 'minutely';
                break;
            case 'week':
                start.setDate(start.getDate() - 7); // Last week
                interval = 'hourly';
                break;
            case 'month':
                start.setMonth(start.getMonth() - 1); // Last month
                interval = 'daily';
                break;
            case 'year':
                start.setFullYear(start.getFullYear() - 1); // Last year
                interval = 'monthly';
                break;
        }

        Promise.all(
            Object.keys(state.powerMeter.powerMetersById).map(function(id){
                if (shouldReceiveReport(state, id, interval, start, end)){
                    return dispatch(receiveReport(id, interval, start, end));
                } else {
                    return Promise.resolve();
                }
            })
        );
    }
}

function shouldReceiveReport(state, powerMeterId, interval, start, end) {
    const powerMeter = state.powerMeter.powerMetersById[powerMeterId];
    if (!powerMeter || !powerMeter.isSelected) {
        return false;
    }

    const report = state.report[powerMeterId];
    if (!report) {
        return true;
    } else if ( report.interval == interval || report.start == start || report.end == end ) {
        return false;
    }
    return true;
}

function receiveReport(powerMeterId, interval, start, end) {
    return function(dispatch) {
        // Notice a new fetch report
        dispatch(fetchReport(powerMeterId));

        return jQuery.ajax({
            url: `/api/reading-report/${powerMeterId}/${interval}/${start.toISOString()}/${end.toISOString()}/`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                dispatch(fetchReportSuccess(powerMeterId, data, start, end, interval));
            },
            error: function(xhr, status, err) {
                dispatch(fetchReportFailed(powerMeterId, err));
            }
        });
    }
}
