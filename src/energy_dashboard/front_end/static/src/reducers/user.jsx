import {
    REQUEST_USER,
    RECEIVE_USER,
} from '../actions/user';
import { AUTH_LOGGED_OUT } from '../actions/auth';

const initial = {
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    isFetching: false,
}

export default function auth(state=initial, action) {
    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state, {
                isFetching: true
            });

        case RECEIVE_USER:
            return Object.assign({}, state, {
                isFetching: false,
                username: action.username,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email
            });

        case AUTH_LOGGED_OUT:
            return initial;

        default:
            return state;
    }
}
