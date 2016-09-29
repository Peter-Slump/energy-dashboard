import jQuery from 'jquery';
import {
    INVALIDATE_REPORT,
    FETCH_REPORT,
    FETCH_REPORT_SUCCESS,
    FETCH_REPORT_FAILED
} from '../actions/report';
import { AUTH_LOGGED_OUT } from '../actions/auth';
import moment from 'moment';

function generateFullReport(powerMeter, stepSize, start, end, data) {
    // Array with a value for each step in the time range
    const stepSizeToMoment = {
        minute: 'm',
        hour: 'h',
        day: 'd',
        month: 'M',
    }
    let report_start = moment(start);
    let report_end = moment(end);
    let result = [];
    let item, item_date, item_value = null;

    function prepare_next_item() {
        item = data.shift();
        if( item == undefined ) {
            return
        }

        item_value = parseFloat(item.value_increment)
        item_date = new Date(item.datetime);

        // For kWh and stepSize minute we calculate to Watt
        if(powerMeter['unit'] == 'kwh' && stepSize == 'minute') {
            item_value = (item_value * 1000) * 60;
        }

    }

    let add_value = stepSizeToMoment[stepSize];
    if(powerMeter['unit'] == 'm3' && stepSize == 'minute') {
        // Smallest stepSize returned is hour
        add_value = stepSizeToMoment['hour'];
    }

    prepare_next_item();
    while( report_start < report_end ) {
        if( item != undefined && report_start >= item_date ) {
            result.push([item_date, item_value]);
            prepare_next_item();
        } else {
            result.push([report_start, null]);
        }

        report_start.add(1, add_value);
    }
    return result;
}

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
            let unit = action.powerMeter['data']['unit'];
            if(unit == 'kwh' && action.stepSize == 'minute') {
                // kWh is calculated to W(att) for stepSize smaller than an hour.
                unit = 'w';
            }

            return Object.assign({}, state, {
                uniqueId: action.powerMeter['data']['id'] + action.stepSize + action.start + action.end,
                isFetching: false,
                didInvalidate: false,
                items: action.report,
                fullReport: generateFullReport(action.powerMeter['data'],
                                               action.stepSize,
                                               action.start,
                                               action.end,
                                               action.report),
                start: action.start,
                end: action.end,
                stepSize: action.stepSize,
                unit: unit,
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
        case AUTH_LOGGED_OUT:
            // Empty state
            return {};

        case INVALIDATE_REPORT:
        case FETCH_REPORT:
        case FETCH_REPORT_FAILED:
            return Object.assign({}, state, {
                [action.powerMeterId]: report(state[action.powerMeterId], action)
            })

        case FETCH_REPORT_SUCCESS:
            return Object.assign({}, state, {
                [action.powerMeter['data']['id']]: report(state[action.powerMeter['data']['id']], action)
            })

        default:
            return state;
    }
}
