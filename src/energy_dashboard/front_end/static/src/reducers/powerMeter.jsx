import {
    FETCH_POWER_METERS,
    FETCH_POWER_METERS_FAILED,
    FETCH_POWER_METERS_SUCCESS,
    CHANGE_SELECTED_POWER_METER
} from '../actions/powerMeter';

const COLORS = [
    '#2196F3',
    '#4CAF50',
    '#9C27B0',
    '#ff9800',
    '#e51c23'
];

function powerMeter(state = {
    data: null,
    isSelected: true,
}, action) {
    switch (action.type) {
        case CHANGE_SELECTED_POWER_METER:
            return Object.assign({}, state, {
                isSelected: action.isSelected
            });
        case FETCH_POWER_METERS_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                color: action.color
            });
        default:
            return state;
    }
}

export default function powerMeters(state = {
    isFetching: false,
    error: null,
    powerMetersById: {}
}, action) {
    let new_state = null
    switch (action.type) {
        case CHANGE_SELECTED_POWER_METER:
            new_state = Object.assign({}, state);
            new_state.powerMetersById[action.id] = powerMeter(state.powerMetersById[action.id], action)
            return new_state;

        case FETCH_POWER_METERS:
            return Object.assign({}, state, {
                isFetching: true
            });

        case FETCH_POWER_METERS_SUCCESS:
            new_state = Object.assign({}, state, {
                isFetching: false
            });
            action.powerMeters.forEach(function(item, i){
                new_state.powerMetersById[item.id] = powerMeter(
                    state.powerMetersById[item.id],
                    Object.assign({}, action, {data: item, color: COLORS[((i+1)%COLORS.length)-1]})
                );
            });
            return new_state

        case FETCH_POWER_METERS_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });

        default:
            return state;
    }
}
