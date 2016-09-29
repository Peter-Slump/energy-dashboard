import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import Cookie from 'js-cookie';

// import the root reducer
import rootReducer from './reducers/index';

import { fetchUser } from './actions/user';
import { changeLanguage } from './actions/language';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

// Load user on startup
store.dispatch(
    fetchUser()
).then(data => browserHistory.push('/'));
store.dispatch(changeLanguage(Cookie.get('lang') || 'GB'));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
