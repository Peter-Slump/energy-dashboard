import jQuery from 'jquery';
import store from '../store';
import {
    INVALIDATE_REPORT,
    FETCH_REPORT,
    FETCH_REPORT_SUCCESS,
    FETCH_REPORT_FAILED
} from '../actions/report';


function report(state = {
    items: [],
    isFetching: false,
    error: null,
    start: null,
    end: null,
    stepSize: null,
    didInvalidate: false
}, action) {
    switch (action.type) {
        case INVALIDATE_REPORT:
            return Object.assign({}, state, {
                didInvalidate: true
            });

        case FETCH_REPORT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case FETCH_REPORT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.report,
                start: action.start,
                end: action.end,
                stepSize: action.stepSize,
                error: null
            });
        case FETCH_REPORT_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}

export default function reports(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_REPORT:
        case FETCH_REPORT:
        case FETCH_REPORT_SUCCESS:
        case FETCH_REPORT_FAILED:
            return Object.assign({}, state, {
                [action.powerMeterId]: report(state[action.powerMeterId], action)
            })

        default:
            return state;
    }
}
