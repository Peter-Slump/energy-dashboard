import { callApi } from './api';
import { fetchUser } from './user';
import { notificationAdd } from './notification';
import { browserHistory } from 'react-router';
import { t as _ } from '../i18n';

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

export function logout() {
    return function(dispatch) {
        dispatch(requestLogout());
        return dispatch(callApi(`/rest-auth/logout/`, 'POST')).then(
            data => {
                dispatch(loggedOut())
                dispatch(notificationAdd(
                    data.success,
                    'info',
                    _('Logged out')
                ))
            }
        );
    }
}

export function login(username, password) {
    return function(dispatch) {
        dispatch(requestLogin());
        return dispatch(callApi(
            `/rest-auth/login/`,
            'POST',
            {username, password}
        )).then(
            data => {
                dispatch(loggedIn(data.key));
                dispatch(fetchUser());
                browserHistory.push('/');
            },
            (xhr, status, error) => {
                dispatch(loginFailed(error))
                if( xhr.status == 400) {
                    dispatch(notificationAdd(
                        xhr.responseJSON.non_field_errors,
                        'error',
                        _('Login failed')
                    ))
                }
            }
        );
    }
}
