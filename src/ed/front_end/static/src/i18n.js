import Jed from 'jed';


let i18n = null;

function getTranslations(locale) {
    return require('./locale/' + locale + '.po');
}

export function setLocale(locale) {
    let translations = getTranslations(locale);
    i18n = new Jed({
        'domain' : 'ed',
        'missing_key_callback' : function(key) {},
        'locale_data': {
            'ed': translations
        }
    });

}

setLocale('en');  // Configure English by default

function gettext(key) {
    return i18n.translate(key).fetch( );
}

function ngettext(singular, plural, n ) {
    return i18n.translate( singular ).ifPlural( n, plural ).fetch( n )
}

export const t = gettext;
export const tn = ngettext;
export const sprintf = Jed.sprintf;