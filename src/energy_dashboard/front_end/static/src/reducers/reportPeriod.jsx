import { CHANGE_REPORT_PERIOD } from '../actions/reportPeriod';

export default function reportPeriod(state = {period: 'day'}, action) {
    switch (action.type) {
        case CHANGE_REPORT_PERIOD:
            return Object.assign({}, state, {
                period: action.period
            });

        default:
            return state;
    }
}
