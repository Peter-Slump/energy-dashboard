import { callApi } from './api';
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

export function logout() {
    return function(dispatch) {
        dispatch(requestLogout());
        return dispatch(callApi(`/rest-auth/logout/`, 'POST')).then(
            () => dispatch(loggedOut())
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
            data => dispatch(loggedIn(data.key)),
            (xhr, status, error) => dispatch(loginFailed(error))
        ).then(
            () => dispatch(fetchUser())
        );
    }
}
