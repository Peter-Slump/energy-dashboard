import { callApi } from './api';
import moment from 'moment';

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
        let offset = state.reportPeriod.offset;
        let stepSize = null,
            start = moment().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0}),
            end = moment().set({'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0});

        switch (state.reportPeriod.period) {
            case 'day':
                start.add(offset, 'days');
                end.add(offset + 1, 'days');
                stepSize = 'minute';
                break;
            case 'week':
                start.day(0);
                end.day(0);
                start.add(offset, 'weeks');
                end.add(offset + 1, 'weeks');
                stepSize = 'hour';
                break;
            case 'month':
                start.date(1);
                end.date(1);
                start.add(offset, 'months');
                end.add(offset + 1, 'months');
                stepSize = 'day';
                break;
            case 'year':
                start.set({'date': 1, 'month': 0});
                end.set({'date': 1, 'month': 0});
                start.add(offset, 'years');
                end.add(offset + 1, 'years');
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
    } else if ( report.stepSize == stepSize && report.start == start && report.end == end ) {
        return false;
    }
    return true;
}

function receiveReport(powerMeterId, stepSize, start, end) {
    return function(dispatch) {
        dispatch(fetchReport(powerMeterId));
        return dispatch(callApi(
            `/api/reading-report/${powerMeterId}/${stepSize}/${start.toISOString()}/${end.toISOString()}/`
        )).then(
            data => dispatch(fetchReportSuccess(powerMeterId, data, start, end, stepSize)),
            (xhr, status, error) => dispatch(fetchReportFailed(powerMeterId, error))

        );
    }
}
