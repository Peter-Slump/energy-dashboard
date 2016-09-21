import {
    LANGUAGE_CHANGED
} from '../actions/language';
import { t as _ } from '../i18n';


const initial = {
    code: 'GB',
    availableLanguages: {
        'NL': 'Dutch',
        'GB': 'English'
    }
}

export default function language(state=initial, action) {
    switch (action.type) {
        case LANGUAGE_CHANGED:
            return Object.assign({}, state, {
                code: action.code
            });

        default:
            return state;
    }
}
