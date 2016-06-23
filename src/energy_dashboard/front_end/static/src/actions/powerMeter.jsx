import { callApi } from './api';

export const FETCH_POWER_METERS = 'FETCH_POWER_METERS';
export function fetchPowerMeters() {
    return {
        type: FETCH_POWER_METERS
    }
}

export const FETCH_POWER_METERS_SUCCESS = 'FETCH_POWER_METERS_SUCCESS';
export function fetchPowerMetersSuccess(powerMeters) {
    return {
        type: FETCH_POWER_METERS_SUCCESS,
        powerMeters
    }
}

export const FETCH_POWER_METERS_FAILED = 'FETCH_POWER_METERS_FAILED';
export function fetchPowerMetersFailed(error) {
    return {
        type: FETCH_POWER_METERS_FAILED,
        error
    }
}

export const CHANGE_SELECTED_POWER_METER = 'CHANGE_SELECTED_POWER_METER';
export function changeSelectedPowerMeter(id, isSelected) {
    return {
        type: CHANGE_SELECTED_POWER_METER,
        id,
        isSelected
    }
}

export function receivePowerMeters() {
    return function(dispatch, getState) {
        dispatch(fetchPowerMeters());
        return dispatch(callApi(`/api/power-meter`)).then(
            data => dispatch(fetchPowerMetersSuccess(data)),
            (xhr, status, error) => dispatch(fetchPowerMetersFailed(error))
        );
    }
}
