import jQuery from 'jquery';

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
    return function(dispatch) {
        dispatch(fetchPowerMeters());

        const promise = new Promise(function(resolve, reject) {
            jQuery.ajax({
                url: '/api/power-meter/',
                dataType: 'json',
                success: function(data) {
                    resolve(data);

                },
                error: function(xhr, status, err) {
                    reject(err);

                }
            });
        });

        return promise.then(
            result => dispatch(fetchPowerMetersSuccess(result)),
            error => dispatch(fetchPowerMetersFailed(error))
        );
    }
}
