import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import actions which should be triggered on load
import { fetchPowerMeters } from './actions/readingReports';

// create an object for the default data
const defaultState = {
    readingReports: {
        period: 'day',
        periodValue: new Date(),
        reports: {},
        powerMeterList: {powerMeters: [], loading: false, error: null},
        powerMeters: {1: true}
    }
};

const store = createStore(rootReducer, defaultState);

// Load power meters right away
store.dispatch(fetchPowerMeters(true));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
