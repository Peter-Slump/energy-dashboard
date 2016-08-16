export const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
export function notificationAdd(message, level='info', headline=null, timeout=10000) {
    return {
        type: NOTIFICATION_ADD,
        message,
        level,
        headline,
        timeout
    }
}