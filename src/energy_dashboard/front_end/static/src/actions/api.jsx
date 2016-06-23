import Cookie from 'js-cookie';
import jQuery from 'jquery';
import { browserHistory } from 'react-router';
import { notificationAdd } from './notification';


export const API_REQUEST = 'API_REQUEST';
export function apiRequest(path, method, data) {
    return {
        type: API_REQUEST,
        path,
        method,
        data
    }
}

export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
export function apiRequestSuccess(data) {
    return {
        type: API_REQUEST_SUCCESS,
        data: data
    }
}

export const API_REQUEST_FAILED = 'API_REQUEST_FAILED';
export function apiRequestFailed(xhr, status, error) {
    return {
        type: API_REQUEST_FAILED,
        code: xhr.status,
        error,
        status
    }
}

export function callApi(path, method='GET', data=null) {
    return function(dispatch) {
        dispatch(apiRequest(path, method, data));

        return new Promise(function(resolve, reject) {
            jQuery.ajax({
                url: path,
                method: method,
                data: data ? JSON.stringify(data) : null,
                beforeSend: function(xhr, settings) {
                    xhr.setRequestHeader("X-CSRFToken", Cookie.get('csrftoken'));
                },
                statusCode: {
                    403: function() {
                        browserHistory.push('/login');
                    }
                }
            }).success(function(data) {
                dispatch(apiRequestSuccess(data));
                resolve(data);
            }).error(function(xhr, status, err){
                if([400, 403].indexOf(xhr.status) == -1) {
                    // Notify user about all errors except 400 and 403.
                    dispatch(notificationAdd(err, 'warning', 'API Error'));
                }
                dispatch(apiRequestFailed(xhr, status, err));
                reject(xhr, status, err);
            });
        });
    }
}
