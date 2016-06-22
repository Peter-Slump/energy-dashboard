import Cookie from 'js-cookie';
import jQuery from 'jquery';
import { fetchUser } from './user';

export const AUTH_REQUEST_LOGIN = 'AUTH_REQUEST_LOGIN';
export function requestLogin() {
    return {
        type: AUTH_REQUEST_LOGIN
    }
}

export const AUTH_LOGGED_IN = 'AUTH_LOGGED_IN';
export function loggedIn(key) {
    return {
        type: AUTH_LOGGED_IN,
        key
    }
}

export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export function loginFailed(error) {
    return {
        type: AUTH_LOGIN_FAILED,
        error
    }
}

export const AUTH_REQUEST_LOGOUT = 'AUTH_REQUEST_LOGOUT';
export function requestLogout() {
    return {
        type: AUTH_REQUEST_LOGOUT
    }
}

export const AUTH_LOGGED_OUT = 'AUTH_LOGGED_OUT';
export function loggedOut() {
    return {
        type: AUTH_LOGGED_OUT
    }
}

export const AUTH_LOG_OUT_FAILED = 'AUTH_LOG_OUT_FAILED';
export function logOutFailed(error) {
    return {
        type: AUTH_LOG_OUT_FAILED,
        error
    }
}

export function logout() {
    return function(dispatch) {
        dispatch(requestLogout());

        return new Promise(function(resolve, reject) {
            return jQuery.ajax({
                method: 'POST',
                url: `/rest-auth/logout/`,
                success: function(data) {
                    resolve();
                },
                error: function(xhr, status, err) {
                    reject(err);
                },
                beforeSend: function(xhr, settings) {
                    xhr.setRequestHeader("X-CSRFToken", Cookie.get('csrftoken'));
                }
            }).success(function(data) {
                dispatch(loggedOut(data));
                resolve(data);
            }).error(function(xhr, status, err) {
                dispatch(logOutFailed(error));
                reject(err)
            });
        });
    }
}

export function login(username, password) {
    return function(dispatch) {
        dispatch(requestLogin());

        return new Promise(function(resolve, reject) {
            return jQuery.ajax({
                url: `/rest-auth/login/`,
                method: 'POST',
                data: JSON.stringify({
                    username, password
                }),
                beforeSend: function(xhr, settings) {
                    xhr.setRequestHeader("X-CSRFToken", Cookie.get('csrftoken'));
                }
            }).success(function(data) {
                dispatch(loggedIn(data.key));
                dispatch(fetchUser());
                resolve(data);
            }).error(function(xhr, status, err){
                dispatch(loginFailed(error));
                reject(err);
            });
        });
    }
}
