import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import other reducers
import auth from './auth';
import powerMeter from './powerMeter';
import report from './report';
import reportPeriod from './reportPeriod';
import user from './user';

// Map the reducers to the appropriate part of the state
const rootReducer = combineReducers({
    auth,
    powerMeter,
    report,
    reportPeriod,
    routing: routerReducer,
    user
});

export default rootReducer;
