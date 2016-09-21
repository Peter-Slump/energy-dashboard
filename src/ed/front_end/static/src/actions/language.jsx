import { setLocale } from '../i18n';
import moment from 'moment'
import Cookie from 'js-cookie';

export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
export function changed(code) {
    return {
        type: LANGUAGE_CHANGED,
        code
    }
}

export function changeLanguage(code) {
    return function(dispatch) {
        return new Promise(function(resolve, reject) {
            let locale = code == 'GB' ? 'EN' : code;
            setLocale(locale.toLowerCase());
            moment.locale(locale.toLowerCase());
            Cookie.set('lang', code);
            dispatch(changed(code));
            resolve(code);
        });
    }
}