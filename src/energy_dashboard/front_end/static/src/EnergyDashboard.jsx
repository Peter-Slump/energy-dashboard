import React from 'react';
import { render } from 'react-dom';

// Import styling
import Paper from 'bootswatch/paper/bootstrap.min.css';
import '../less/styles.less';

// Import components
import App from './components/App';
import Dashboard from './components/Dashboard';

// Import router dependencies
import { Router, Route, IndexRoute } from 'react-router';

// Import redux dependencies
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard}></IndexRoute>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
