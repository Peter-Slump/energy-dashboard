import jQuery from 'jquery';
import { browserHistory } from 'react-router'

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

export const RECEIVE_USER_FAILED = 'RECEIVE_USER_FAILED';
export function receiveUserFailed(error, statusCode) {
    return {
        type: RECEIVE_USER_FAILED,
        error
    }
}

export function fetchUser() {
    return function(dispatch) {
        dispatch(requestUser());

        return new Promise(function(resolve, reject) {
            jQuery.ajax({
                url: `/rest-auth/user/`,
            }).success(function(data) {
                dispatch(receiveUser(
                    data.username,
                    data.first_name,
                    data.last_name,
                    data.email
                ));
                resolve(data);
            }).error(function(xhr, status, err) {
                receiveUserFailed(err)
                reject(err);
            });
        });
    }
}
