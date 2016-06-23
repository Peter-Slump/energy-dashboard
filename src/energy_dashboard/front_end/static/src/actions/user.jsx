import { callApi } from './api';

export const REQUEST_USER = 'REQUEST_USER';
export function requestUser() {
    return {
        type: REQUEST_USER
    }
}

export const RECEIVE_USER = 'RECEIVE_USER';
export function receiveUser(username, firstName, lastName, email) {
    return {
        type: RECEIVE_USER,
        username,
        firstName,
        lastName,
        email
    }
}

export function fetchUser() {
    return function(dispatch) {
        dispatch(requestUser());
        return dispatch(callApi(`/rest-auth/user/`)).then(
            data => dispatch(receiveUser(
                data.username,
                data.first_name,
                data.last_name,
                data.email
            ))
        );
    }
}
