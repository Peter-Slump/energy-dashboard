import React from 'react';
import { render } from 'react-dom';

// Import styling
import Paper from 'bootswatch/paper/bootstrap.min.css';
import '../less/styles.less';

// Import components
import App from './components/App';
import Credits from './components/Credits';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';

// Import router dependencies
import { Router, Route, IndexRoute } from 'react-router';

// Import Redux dependencies
import { Provider } from 'react-redux';
import store, { history } from './store';

// Set some default jQuery AJAX settings
import jQuery from 'jquery';

jQuery.ajaxSetup({
    contentType: "application/json; charset=utf-8",
    dataType: "json"
});

// Initialize the router
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard}></IndexRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/credits" component={Credits}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
