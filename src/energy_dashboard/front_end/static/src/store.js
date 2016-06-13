import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

// import the root reducer
import rootReducer from './reducers/index';

import { receivePowerMeters } from './actions/powerMeter';
import { receiveReportsIfNeeded } from './actions/report';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

// Load powerMeters on startup
store.dispatch(receivePowerMeters()).then(() => store.dispatch(receiveReportsIfNeeded()));


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
