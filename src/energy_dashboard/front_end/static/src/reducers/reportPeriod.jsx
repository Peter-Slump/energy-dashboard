import { CHANGE_REPORT_PERIOD } from '../actions/reportPeriod';
import { AUTH_LOGGED_OUT } from '../actions/auth';

const initial = {period: 'day'}

export default function reportPeriod(state=initial, action) {
    switch (action.type) {
        case AUTH_LOGGED_OUT:
            // Put back to initial state
            return initial;

        case CHANGE_REPORT_PERIOD:
            return Object.assign({}, state, {
                period: action.period
            });

        default:
            return state;
    }
}
