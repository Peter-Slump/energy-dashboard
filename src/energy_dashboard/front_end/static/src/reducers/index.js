import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import other reducers
import api from './api';
import auth from './auth';
import notification from './notification';
import powerMeter from './powerMeter';
import report from './report';
import reportPeriod from './reportPeriod';
import user from './user';

// Map the reducers to the appropriate part of the state
const rootReducer = combineReducers({
    api,
    auth,
    notification,
    powerMeter,
    report,
    reportPeriod,
    routing: routerReducer,
    user
});

export default rootReducer;
