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

        const promise = new Promise(function(resolve, reject) {
            jQuery.ajax({
                url: `/rest-auth/user/`,
                statusCode: {
                    403: function() {
                        browserHistory.push('/login');
                    }
                },
                success: function(data) {
                    resolve(data);
                },
                error: function(xhr, status, err) {
                    if( xhr.status != 403 ) {
                        reject(err);
                    }
                }
            });
        });
        return promise.then(
            result => dispatch(receiveUser(
                result.username,
                result.first_name,
                result.last_name,
                result.email
            )),
            error => dispatch(receiveUserFailed(error))
        );
    }
}
