export function readingReportChangePeriod(period) {
    return {
        type: 'READING_REPORT_CHANGE_PERIOD',
        period
    }
}

export function changeSelectedPowerMeter(id, enabled) {
    return {
        type: 'CHANGE_SELECTED_POWER_METER',
        id,
        enabled
    }
}

export function fetchPowerMeters(loading) {
    return {
        type: 'FETCH_POWER_METERS',
        loading
    }
}

export function fetchPowerMetersSuccess(powerMeters) {
    return {
        type: 'FETCH_POWER_METERS_SUCCESS',
        powerMeters
    }
}

export function fetchPowerMetersFailed(error) {
    return {
        type: 'FETCH_POWER_METERS_FAILED',
        error
    }
}

export function fetchAllReports() {
    return {
        type: 'FETCH_ALL_REPORTS'
    }
}

export function fetchReport(powerMeterId) {
    return {
        type: 'FETCH_REPORT',
        powerMeterId
    }
}

export function fetchReportSuccess(powerMeterId, report) {
    return {
        type: 'FETCH_REPORT_SUCCESS',
        powerMeterId,
        report
    }
}

export function fetchReportFailed(powerMeterId, error) {
    return {
        type: 'FETCH_REPORT_FAILED',
        powerMeterId,
        error
    }
}
