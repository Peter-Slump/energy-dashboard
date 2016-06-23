import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

// import the root reducer
import rootReducer from './reducers/index';

import { fetchUser } from './actions/user';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

// Load user on startup
store.dispatch(fetchUser()).then(
    function() { browserHistory.push('/'); }
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
