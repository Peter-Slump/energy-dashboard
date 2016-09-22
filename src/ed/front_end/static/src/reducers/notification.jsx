import {
    NOTIFICATION_ADD
} from '../actions/notification';

export default function notification(state=[], action) {
    switch (action.type) {
        case NOTIFICATION_ADD:
            return state.concat([
                {
                    message: action.message,
                    type: action.level,
                    headline: action.headline,
                    timeout: action.timeout
                }
            ])

        default:
            return state;
    }
}
