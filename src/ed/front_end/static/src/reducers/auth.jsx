import {
    AUTH_LOGGED_IN,
    AUTH_LOGGED_OUT
} from '../actions/auth';
import { RECEIVE_USER } from '../actions/user';

export default function auth(state = {
    loggedIn: null,
    key: null
}, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, {
                loggedIn: true,
            });

        case AUTH_LOGGED_IN:
            return Object.assign({}, state, {
                loggedIn: true,
                key: action.key
            });

        case AUTH_LOGGED_OUT:
            return Object.assign({}, state, {
                loggedIn: false,
                key: null
            });

        default:
            return state;
    }
}
