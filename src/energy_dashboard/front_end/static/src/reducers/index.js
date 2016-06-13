import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import other reducers
import powerMeter from './powerMeter';
import report from './report';
import reportPeriod from './reportPeriod';

// Map the reducers to the appropriate part of the state
const rootReducer = combineReducers({powerMeter, report, reportPeriod, routing: routerReducer });

export default rootReducer;
