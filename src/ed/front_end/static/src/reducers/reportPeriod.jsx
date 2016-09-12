import {
    CHANGE_REPORT_PERIOD,
    CHANGE_REPORT_PERIOD_OFFSET
} from '../actions/reportPeriod';
import { AUTH_LOGGED_OUT } from '../actions/auth';

const initial = {period: 'day', offset: 0}

export default function reportPeriod(state=initial, action) {
    switch (action.type) {
        case AUTH_LOGGED_OUT:
            // Put back to initial state
            return initial;

        case CHANGE_REPORT_PERIOD:
            return Object.assign({}, state, {
                period: action.period,
                offset: 0
            });

        case CHANGE_REPORT_PERIOD_OFFSET:
            let offset = state.offset;
            offset += action.delta;
            return Object.assign({}, state, {
                offset: offset > 0 ? 0 : offset
            });

        default:
            return state;
    }
}
