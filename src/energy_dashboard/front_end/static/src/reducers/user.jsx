import {
    REQUEST_USER,
    RECEIVE_USER,
} from '../actions/user';
import { AUTH_LOGGED_OUT } from '../actions/auth';

export default function auth(state = {
    isFetching: false,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
}, action) {
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
            return Object.assign({}, state, {
                username: null,
                firstName: null,
                lastName: null,
                email: null
            });

        default:
            return state;
    }
}
