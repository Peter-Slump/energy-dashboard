import Jed from 'jed';

function getTranslations(locale) {
    return require('./locale/' + locale + '.po');
}

let i18n = null;

function setLocale(locale) {
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
}

setLocale('nl');

function gettext(key, ...args) {
    return i18n.translate(key).fetch( ...args );
}

function ngettext(singular, plural, n, ...args ) {
    return i18n.translate( singular ).ifPlural( n, plural ).fetch( n, ...args )
}

export const t = gettext;
export const tn = ngettext;