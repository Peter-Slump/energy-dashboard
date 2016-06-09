import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import other reducers
import readingReports from './readingReports';

const rootReducer = combineReducers({readingReports, routing: routerReducer });

export default rootReducer;