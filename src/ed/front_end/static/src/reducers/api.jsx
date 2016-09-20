import {
    API_SHOWN_ERROR_INDEX,
    API_REQUEST,
    API_REQUEST_SUCCESS,
    API_REQUEST_FAILED
} from '../actions/api';

export default function api(state={
    currentRequests: 0,
    errors: [],
    shownErrorIndex: 0
}, action) {
    switch (action.type) {
        case API_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                currentRequests: state.currentRequests - 1,
            });

        case API_REQUEST:
            return Object.assign({}, state, {
                currentRequests: state.currentRequests + 1,
            });

        case API_REQUEST_FAILED:
            let state = Object.assign({}, state, {
                currentRequests: state.currentRequests - 1,
            });
            if( action.code != 403 ){
                state.errors.push(action.error);
            }
            return state;

        default:
            return state;
    }
}
