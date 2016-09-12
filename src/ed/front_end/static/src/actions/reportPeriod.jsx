export const CHANGE_REPORT_PERIOD = 'CHANGE_REPORT_PERIOD'
export const CHANGE_REPORT_PERIOD_OFFSET = 'CHANGE_REPORT_PERIOD_OFFSET'

export function changeReportPeriod(period) {
    return {
        type: CHANGE_REPORT_PERIOD,
        period
    }
}

export function changeReportPeriodOffset(delta) {
    return {
        type: CHANGE_REPORT_PERIOD_OFFSET,
        delta
    }
}
