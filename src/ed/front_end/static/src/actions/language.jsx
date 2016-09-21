import { setLocale } from '../i18n';

export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
export function changed(code) {
    return {
        type: LANGUAGE_CHANGED,
        code
    }
}

export function changeLanguage(code) {
    return function(dispatch) {
        let locale = code == 'GB' ? 'EN' : code;
        setLocale(locale.toLowerCase());
        return dispatch(changed(code));
    }
}