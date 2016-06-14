export const CHANGE_REPORT_PERIOD = 'CHANGE_REPORT_PERIOD'
export function changeReportPeriod(period) {
    return {
        type: CHANGE_REPORT_PERIOD,
        period
    }
}
