import Jed from 'jed';
import Cookie from 'js-cookie';

let i18n = null;

function getTranslations(locale) {
    return require('./locale/' + locale + '.po');
}

export function setLocale(locale) {
    let translations = getTranslations(locale);
    i18n = new Jed({
        'domain' : 'ed',
        'missing_key_callback' : function(key) {
            console.log('Missing translation:', key);
        },
        'locale_data': {
            'ed': translations
        }
    });
    Cookie.set('lang', locale);
}

setLocale(Cookie.get('lang') || 'en');  // Configure English by default

function gettext(key, ...args) {
    return i18n.translate(key).fetch( ...args );
}

function ngettext(singular, plural, n, ...args ) {
    return i18n.translate( singular ).ifPlural( n, plural ).fetch( n, ...args )
}

export const t = gettext;
export const tn = ngettext;
