webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	// Import styling

	var _bootswatchPaperBootstrapMinCss = __webpack_require__(168);

	var _bootswatchPaperBootstrapMinCss2 = _interopRequireDefault(_bootswatchPaperBootstrapMinCss);

	__webpack_require__(177);

	// Import components

	var _componentsApp = __webpack_require__(179);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _componentsCredits = __webpack_require__(653);

	var _componentsCredits2 = _interopRequireDefault(_componentsCredits);

	var _componentsDashboard = __webpack_require__(654);

	var _componentsDashboard2 = _interopRequireDefault(_componentsDashboard);

	var _componentsLogin = __webpack_require__(663);

	var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

	var _componentsLogout = __webpack_require__(664);

	var _componentsLogout2 = _interopRequireDefault(_componentsLogout);

	// Import router dependencies

	var _reactRouter = __webpack_require__(205);

	// Import Redux dependencies

	var _reactRedux = __webpack_require__(193);

	var _store = __webpack_require__(665);

	var _store2 = _interopRequireDefault(_store);

	// Set some default jQuery AJAX settings

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	_jquery2['default'].ajaxSetup({
	    contentType: "application/json; charset=utf-8",
	    dataType: "json"
	});

	// Initialize the router
	var router = _react2['default'].createElement(_reactRedux.Provider, { store: _store2['default'] }, _react2['default'].createElement(_reactRouter.Router, { history: _store.history }, _react2['default'].createElement(_reactRouter.Route, { path: '/', component: _componentsApp2['default'] }, _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsDashboard2['default'] }), _react2['default'].createElement(_reactRouter.Route, { path: '/login', component: _componentsLogin2['default'] }), _react2['default'].createElement(_reactRouter.Route, { path: '/logout', component: _componentsLogout2['default'] }), _react2['default'].createElement(_reactRouter.Route, { path: '/credits', component: _componentsCredits2['default'] }))));

	(0, _reactDom.render)(router, document.getElementById('root'));

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(176)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./styles.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./styles.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, ".row-bottom-spacing {\n  margin-bottom: 20px;\n}\n.language-select ul.dropdown-menu {\n  min-width: auto;\n}\n.navbar-brand img {\n  width: 25px;\n}\n.navbar-text {\n  margin-left: 1em;\n}\n.alert-notifier-container {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 250px;\n  padding: 5px;\n  z-index: 9999;\n}\n.alert-notifier-container .alert-enter {\n  opacity: 0.01;\n  transition: opacity 0.25s ease-in;\n}\n.alert-notifier-container .alert-enter.alert-enter-active {\n  opacity: 1;\n}\n.alert-notifier-container .alert-leave {\n  opacity: 1;\n  transition: opacity 0.25s ease-in;\n}\n.alert-notifier-container .alert-leave.alert-leave-active {\n  opacity: 0.01;\n}\nfooter {\n  margin: 5em 0;\n}\nfooter li {\n  float: left;\n  margin-bottom: 1.5em;\n  margin-right: 1.5em;\n}\nfooter p {\n  clear: left;\n  margin-bottom: 0;\n}\n", ""]);

	// exports


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	var _redux = __webpack_require__(180);

	var _reactRedux = __webpack_require__(193);

	var _actionsApi = __webpack_require__(202);

	var apiActions = _interopRequireWildcard(_actionsApi);

	var _actionsAuth = __webpack_require__(265);

	var authActions = _interopRequireWildcard(_actionsAuth);

	var _actionsLanguage = __webpack_require__(272);

	var languageActions = _interopRequireWildcard(_actionsLanguage);

	var _actionsNotification = __webpack_require__(264);

	var notificationActions = _interopRequireWildcard(_actionsNotification);

	var _actionsPowerMeter = __webpack_require__(376);

	var powerMeterActions = _interopRequireWildcard(_actionsPowerMeter);

	var _actionsReport = __webpack_require__(377);

	var reportActions = _interopRequireWildcard(_actionsReport);

	var _actionsReportPeriod = __webpack_require__(378);

	var reportPeriodActions = _interopRequireWildcard(_actionsReportPeriod);

	var _actionsUser = __webpack_require__(266);

	var userActions = _interopRequireWildcard(_actionsUser);

	var _Main = __webpack_require__(379);

	var _Main2 = _interopRequireDefault(_Main);

	// Make sure the store values are available to all components
	function mapStateToProps(state) {
	    return {
	        api: state.api,
	        auth: state.auth,
	        language: state.language,
	        notification: state.notification,
	        powerMeter: state.powerMeter,
	        report: state.report,
	        reportPeriod: state.reportPeriod,
	        user: state.user
	    };
	}

	// Make sure all actions are available to the props in the components
	function mapDispatchToProps(dispatch) {
	    return {
	        apiActions: (0, _redux.bindActionCreators)(apiActions, dispatch),
	        authActions: (0, _redux.bindActionCreators)(authActions, dispatch),
	        languageActions: (0, _redux.bindActionCreators)(languageActions, dispatch),
	        notificationActions: (0, _redux.bindActionCreators)(notificationActions, dispatch),
	        powerMeterActions: (0, _redux.bindActionCreators)(powerMeterActions, dispatch),
	        reportActions: (0, _redux.bindActionCreators)(reportActions, dispatch),
	        reportPeriodActions: (0, _redux.bindActionCreators)(reportPeriodActions, dispatch),
	        userActions: (0, _redux.bindActionCreators)(userActions, dispatch)
	    };
	}

	var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2['default']);

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.apiRequest = apiRequest;
	exports.apiRequestSuccess = apiRequestSuccess;
	exports.apiRequestFailed = apiRequestFailed;
	exports.callApi = callApi;

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _jsCookie = __webpack_require__(203);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactRouter = __webpack_require__(205);

	var _notification = __webpack_require__(264);

	var API_REQUEST = 'API_REQUEST';
	exports.API_REQUEST = API_REQUEST;

	function apiRequest(path, method, data) {
	    return {
	        type: API_REQUEST,
	        path: path,
	        method: method,
	        data: data
	    };
	}

	var API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
	exports.API_REQUEST_SUCCESS = API_REQUEST_SUCCESS;

	function apiRequestSuccess(data) {
	    return {
	        type: API_REQUEST_SUCCESS,
	        data: data
	    };
	}

	var API_REQUEST_FAILED = 'API_REQUEST_FAILED';
	exports.API_REQUEST_FAILED = API_REQUEST_FAILED;

	function apiRequestFailed(xhr, status, error) {
	    return {
	        type: API_REQUEST_FAILED,
	        code: xhr.status,
	        error: error,
	        status: status
	    };
	}

	function callApi(path) {
	    var method = arguments.length <= 1 || arguments[1] === undefined ? 'GET' : arguments[1];
	    var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    return function (dispatch) {
	        dispatch(apiRequest(path, method, data));

	        return new Promise(function (resolve, reject) {
	            _jquery2['default'].ajax({
	                url: path,
	                method: method,
	                data: data ? JSON.stringify(data) : null,
	                beforeSend: function beforeSend(xhr, settings) {
	                    xhr.setRequestHeader("X-CSRFToken", _jsCookie2['default'].get('csrftoken'));
	                },
	                statusCode: {
	                    403: function _() {
	                        _reactRouter.browserHistory.push('/login');
	                    }
	                }
	            }).success(function (data) {
	                dispatch(apiRequestSuccess(data));
	                resolve(data);
	            }).error(function (xhr, status, err) {
	                if ([400, 403].indexOf(xhr.status) == -1) {
	                    // Notify user about all errors except 400 and 403.
	                    dispatch((0, _notification.notificationAdd)(err, 'warning', 'API Error'));
	                }
	                dispatch(apiRequestFailed(xhr, status, err));
	                reject(xhr, status, err);
	            });
	        });
	    };
	}

/***/ },

/***/ 264:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.notificationAdd = notificationAdd;
	var NOTIFICATION_ADD = 'NOTIFICATION_ADD';
	exports.NOTIFICATION_ADD = NOTIFICATION_ADD;

	function notificationAdd(message) {
	    var level = arguments.length <= 1 || arguments[1] === undefined ? 'info' : arguments[1];
	    var headline = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	    var timeout = arguments.length <= 3 || arguments[3] === undefined ? 10000 : arguments[3];

	    return {
	        type: NOTIFICATION_ADD,
	        message: message,
	        level: level,
	        headline: headline,
	        timeout: timeout
	    };
	}

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.requestLogin = requestLogin;
	exports.loggedIn = loggedIn;
	exports.loginFailed = loginFailed;
	exports.requestLogout = requestLogout;
	exports.loggedOut = loggedOut;
	exports.logout = logout;
	exports.login = login;

	var _api = __webpack_require__(202);

	var _user = __webpack_require__(266);

	var _notification = __webpack_require__(264);

	var _reactRouter = __webpack_require__(205);

	var _i18n = __webpack_require__(267);

	var AUTH_REQUEST_LOGIN = 'AUTH_REQUEST_LOGIN';
	exports.AUTH_REQUEST_LOGIN = AUTH_REQUEST_LOGIN;

	function requestLogin() {
	    return {
	        type: AUTH_REQUEST_LOGIN
	    };
	}

	var AUTH_LOGGED_IN = 'AUTH_LOGGED_IN';
	exports.AUTH_LOGGED_IN = AUTH_LOGGED_IN;

	function loggedIn(key) {
	    return {
	        type: AUTH_LOGGED_IN,
	        key: key
	    };
	}

	var AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
	exports.AUTH_LOGIN_FAILED = AUTH_LOGIN_FAILED;

	function loginFailed(error) {
	    return {
	        type: AUTH_LOGIN_FAILED,
	        error: error
	    };
	}

	var AUTH_REQUEST_LOGOUT = 'AUTH_REQUEST_LOGOUT';
	exports.AUTH_REQUEST_LOGOUT = AUTH_REQUEST_LOGOUT;

	function requestLogout() {
	    return {
	        type: AUTH_REQUEST_LOGOUT
	    };
	}

	var AUTH_LOGGED_OUT = 'AUTH_LOGGED_OUT';
	exports.AUTH_LOGGED_OUT = AUTH_LOGGED_OUT;

	function loggedOut() {
	    return {
	        type: AUTH_LOGGED_OUT
	    };
	}

	function logout() {
	    return function (dispatch) {
	        dispatch(requestLogout());
	        return dispatch((0, _api.callApi)('/rest-auth/logout/', 'POST')).then(function (data) {
	            dispatch(loggedOut());
	            dispatch((0, _notification.notificationAdd)(data.success, 'info', (0, _i18n.t)('Logged out')));
	        });
	    };
	}

	function login(username, password) {
	    return function (dispatch) {
	        dispatch(requestLogin());
	        return dispatch((0, _api.callApi)('/rest-auth/login/', 'POST', { username: username, password: password })).then(function (data) {
	            dispatch(loggedIn(data.key));
	            dispatch((0, _user.fetchUser)());
	            _reactRouter.browserHistory.push('/');
	        }, function (xhr, status, error) {
	            dispatch(loginFailed(error));
	            if (xhr.status == 400) {
	                dispatch((0, _notification.notificationAdd)(xhr.responseJSON.non_field_errors, 'error', (0, _i18n.t)('Login failed')));
	            }
	        });
	    };
	}

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.requestUser = requestUser;
	exports.receiveUser = receiveUser;
	exports.fetchUser = fetchUser;

	var _api = __webpack_require__(202);

	var REQUEST_USER = 'REQUEST_USER';
	exports.REQUEST_USER = REQUEST_USER;

	function requestUser() {
	    return {
	        type: REQUEST_USER
	    };
	}

	var RECEIVE_USER = 'RECEIVE_USER';
	exports.RECEIVE_USER = RECEIVE_USER;

	function receiveUser(username, firstName, lastName, email) {
	    return {
	        type: RECEIVE_USER,
	        username: username,
	        firstName: firstName,
	        lastName: lastName,
	        email: email
	    };
	}

	function fetchUser() {
	    return function (dispatch) {
	        dispatch(requestUser());
	        return dispatch((0, _api.callApi)('/rest-auth/user/')).then(function (data) {
	            return dispatch(receiveUser(data.username, data.first_name, data.last_name, data.email));
	        });
	    };
	}

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.setLocale = setLocale;

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _jed = __webpack_require__(268);

	var _jed2 = _interopRequireDefault(_jed);

	var i18n = null;

	function getTranslations(locale) {
	    return __webpack_require__(269)("./" + locale + '.po');
	}

	function setLocale(locale) {
	    var translations = getTranslations(locale);
	    i18n = new _jed2['default']({
	        'domain': 'ed',
	        'missing_key_callback': function missing_key_callback(key) {
	            console.log('Missing translation:', key);
	        },
	        'locale_data': {
	            'ed': translations
	        }
	    });
	}

	setLocale('en'); // Configure English by default

	function gettext(key) {
	    return i18n.translate(key).fetch();
	}

	function ngettext(singular, plural, n) {
	    return i18n.translate(singular).ifPlural(n, plural).fetch(n);
	}

	var t = gettext;
	exports.t = t;
	var tn = ngettext;
	exports.tn = tn;
	var sprintf = _jed2['default'].sprintf;
	exports.sprintf = sprintf;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en.po": 270,
		"./nl.po": 271
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 269;


/***/ },

/***/ 270:
/***/ function(module, exports) {

	module.exports = {"Credits":["Credits"],"This project is made possible with the following tools":["This project is made possible with the following tools"],"Logging you out...":["Logging you out..."],"Authenticate":["Authenticate"],"Username":["Username"],"Password":["Password"],"Login":["Login"],"Logged out":["Logged out"],"Login failed":["Login failed"],"This year":["This year"],"Last year":["Last year"],"This month":["This month"],"Last month":["Last month"],"This week":["This week"],"Last week":["Last week"],"Week:":["Week:"],"Today":["Today"],"Yesterday":["Yesterday"],"Last":["Last"],"Unknown":["Unknown"],"Year":["Year"],"Month":["Month"],"Week":["Week"],"Day":["Day"],"Created by":["Created by"],"Fetching...":["Fetching..."],"Not logged in":["Not logged in"],"Energy Dashboard":["Energy Dashboard"],"Logout":["Logout"],"Dismiss":["Dismiss"],"Signed in as %s %s":["Signed in as %s %s"],"Signed in as %s":["Signed in as %s"],"Dutch":["Dutch"],"English":["English"],"":{"domain":"messages","plural_forms":"nplurals=2; plural=(n != 1);","lang":"en"}};

/***/ },

/***/ 271:
/***/ function(module, exports) {

	module.exports = {"Credits":["Credits"],"This project is made possible with the following tools":["Dit project is mede mogelijk gemaakt door de volgende hulpmiddelen"],"Logging you out...":["Je wordt uitgelogt"],"Authenticate":["Aanmelden"],"Username":["Gebruikersnaam"],"Password":["Wachtwoord"],"Login":["Inloggen"],"Logged out":["Uitgelogt"],"Login failed":["Login niet gelukt"],"This year":["Dit jaar"],"Last year":["Afgelopen jaar"],"This month":["Deze maand"],"Last month":["Afgelopen maand"],"This week":["Deze week"],"Last week":["Vorige week"],"Week:":["Week:"],"Today":["Vandaag"],"Yesterday":["Gisteren"],"Last":["Afgelopen"],"Unknown":["Onbekend"],"Year":["Jaar"],"Month":["Maand"],"Week":["Week"],"Day":["Dag"],"Created by":["Gemaakt door"],"Fetching...":["Ophalen..."],"Not logged in":["Niet ingelogt"],"Energy Dashboard":["Energie Dashboard"],"Logout":["Uitloggen"],"Dismiss":["Negeren"],"Signed in as %s %s":["Ingelogd als %s %s"],"Signed in as %s":["Ingelogd als %s"],"Dutch":["Nederlands"],"English":["Engels"],"":{"domain":"messages","plural_forms":"nplurals=2; plural=(n != 1);","lang":"nl"}};

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.changed = changed;
	exports.changeLanguage = changeLanguage;

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _i18n = __webpack_require__(267);

	var _moment = __webpack_require__(273);

	var _moment2 = _interopRequireDefault(_moment);

	var _jsCookie = __webpack_require__(203);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';
	exports.LANGUAGE_CHANGED = LANGUAGE_CHANGED;

	function changed(code) {
	    return {
	        type: LANGUAGE_CHANGED,
	        code: code
	    };
	}

	function changeLanguage(code) {
	    return function (dispatch) {
	        return new Promise(function (resolve, reject) {
	            var locale = code == 'GB' ? 'EN' : code;
	            (0, _i18n.setLocale)(locale.toLowerCase());
	            _moment2['default'].locale(locale.toLowerCase());
	            _jsCookie2['default'].set('lang', code);
	            dispatch(changed(code));
	            resolve(code);
	        });
	    };
	}

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.fetchPowerMeters = fetchPowerMeters;
	exports.fetchPowerMetersSuccess = fetchPowerMetersSuccess;
	exports.fetchPowerMetersFailed = fetchPowerMetersFailed;
	exports.changeSelectedPowerMeter = changeSelectedPowerMeter;
	exports.receivePowerMeters = receivePowerMeters;

	var _api = __webpack_require__(202);

	var FETCH_POWER_METERS = 'FETCH_POWER_METERS';
	exports.FETCH_POWER_METERS = FETCH_POWER_METERS;

	function fetchPowerMeters() {
	    return {
	        type: FETCH_POWER_METERS
	    };
	}

	var FETCH_POWER_METERS_SUCCESS = 'FETCH_POWER_METERS_SUCCESS';
	exports.FETCH_POWER_METERS_SUCCESS = FETCH_POWER_METERS_SUCCESS;

	function fetchPowerMetersSuccess(powerMeters) {
	    return {
	        type: FETCH_POWER_METERS_SUCCESS,
	        powerMeters: powerMeters
	    };
	}

	var FETCH_POWER_METERS_FAILED = 'FETCH_POWER_METERS_FAILED';
	exports.FETCH_POWER_METERS_FAILED = FETCH_POWER_METERS_FAILED;

	function fetchPowerMetersFailed(error) {
	    return {
	        type: FETCH_POWER_METERS_FAILED,
	        error: error
	    };
	}

	var CHANGE_SELECTED_POWER_METER = 'CHANGE_SELECTED_POWER_METER';
	exports.CHANGE_SELECTED_POWER_METER = CHANGE_SELECTED_POWER_METER;

	function changeSelectedPowerMeter(id, isSelected) {
	    return {
	        type: CHANGE_SELECTED_POWER_METER,
	        id: id,
	        isSelected: isSelected
	    };
	}

	function receivePowerMeters() {
	    return function (dispatch, getState) {
	        dispatch(fetchPowerMeters());
	        return dispatch((0, _api.callApi)('/api/power-meter/')).then(function (data) {
	            return dispatch(fetchPowerMetersSuccess(data));
	        }, function (xhr, status, error) {
	            return dispatch(fetchPowerMetersFailed(error));
	        });
	    };
	}

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.invalidateReport = invalidateReport;
	exports.fetchReport = fetchReport;
	exports.fetchReportSuccess = fetchReportSuccess;
	exports.fetchReportFailed = fetchReportFailed;
	exports.receiveReportsIfNeeded = receiveReportsIfNeeded;

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _api = __webpack_require__(202);

	var _moment = __webpack_require__(273);

	var _moment2 = _interopRequireDefault(_moment);

	var INVALIDATE_REPORT = 'INVALIDATE_REPORT';
	exports.INVALIDATE_REPORT = INVALIDATE_REPORT;

	function invalidateReport(powerMeterId) {
	    return {
	        type: INVALIDATE_REPORT,
	        powerMeterId: powerMeterId
	    };
	}

	var FETCH_REPORT = 'FETCH_REPORT';
	exports.FETCH_REPORT = FETCH_REPORT;

	function fetchReport(powerMeterId) {
	    return {
	        type: FETCH_REPORT,
	        powerMeterId: powerMeterId
	    };
	}

	var FETCH_REPORT_SUCCESS = 'FETCH_REPORT_SUCCESS';
	exports.FETCH_REPORT_SUCCESS = FETCH_REPORT_SUCCESS;

	function fetchReportSuccess(powerMeterId, report, start, end, stepSize) {
	    return {
	        type: FETCH_REPORT_SUCCESS,
	        powerMeterId: powerMeterId,
	        report: report,
	        start: start,
	        end: end,
	        stepSize: stepSize
	    };
	}

	var FETCH_REPORT_FAILED = 'FETCH_REPORT_FAILED';
	exports.FETCH_REPORT_FAILED = FETCH_REPORT_FAILED;

	function fetchReportFailed(powerMeterId, error) {
	    return {
	        type: FETCH_REPORT_FAILED,
	        powerMeterId: powerMeterId,
	        error: error
	    };
	}

	function receiveReportsIfNeeded() {
	    return function (dispatch, getState) {
	        var state = getState();
	        var offset = state.reportPeriod.offset;
	        var stepSize = null,
	            start = (0, _moment2['default'])().set({ 'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0 }),
	            end = (0, _moment2['default'])().set({ 'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0 });

	        switch (state.reportPeriod.period) {
	            case 'day':
	                start.add(offset, 'days');
	                end.add(offset + 1, 'days');
	                stepSize = 'minute';
	                break;
	            case 'week':
	                start.day(0);
	                end.day(0);
	                start.add(offset, 'weeks');
	                end.add(offset + 1, 'weeks');
	                stepSize = 'hour';
	                break;
	            case 'month':
	                start.date(1);
	                end.date(1);
	                start.add(offset, 'months');
	                end.add(offset + 1, 'months');
	                stepSize = 'day';
	                break;
	            case 'year':
	                start.set({ 'date': 1, 'month': 0 });
	                end.set({ 'date': 1, 'month': 0 });
	                start.add(offset, 'years');
	                end.add(offset + 1, 'years');
	                stepSize = 'month';
	                break;
	        }
	        Promise.all(Object.keys(state.powerMeter.powerMetersById).map(function (id) {
	            if (shouldReceiveReport(state, id, stepSize, start, end)) {
	                return dispatch(receiveReport(id, stepSize, start, end));
	            } else {
	                return Promise.resolve();
	            }
	        }));
	    };
	}

	function shouldReceiveReport(state, powerMeterId, stepSize, start, end) {
	    var powerMeter = state.powerMeter.powerMetersById[powerMeterId];
	    if (!powerMeter || !powerMeter.isSelected) {
	        return false;
	    }

	    var report = state.report[powerMeterId];
	    if (!report) {
	        return true;
	    } else if (report.stepSize == stepSize && report.start == start && report.end == end) {
	        return false;
	    }
	    return true;
	}

	function receiveReport(powerMeterId, stepSize, start, end) {
	    return function (dispatch) {
	        dispatch(fetchReport(powerMeterId));
	        return dispatch((0, _api.callApi)('/api/reading-report/' + powerMeterId + '/' + stepSize + '/' + start.toISOString() + '/' + end.toISOString() + '/')).then(function (data) {
	            return dispatch(fetchReportSuccess(powerMeterId, data, start, end, stepSize));
	        }, function (xhr, status, error) {
	            return dispatch(fetchReportFailed(powerMeterId, error));
	        });
	    };
	}

/***/ },

/***/ 378:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.changeReportPeriod = changeReportPeriod;
	exports.changeReportPeriodOffset = changeReportPeriodOffset;
	var CHANGE_REPORT_PERIOD = 'CHANGE_REPORT_PERIOD';
	exports.CHANGE_REPORT_PERIOD = CHANGE_REPORT_PERIOD;
	var CHANGE_REPORT_PERIOD_OFFSET = 'CHANGE_REPORT_PERIOD_OFFSET';

	exports.CHANGE_REPORT_PERIOD_OFFSET = CHANGE_REPORT_PERIOD_OFFSET;

	function changeReportPeriod(period) {
	    return {
	        type: CHANGE_REPORT_PERIOD,
	        period: period
	    };
	}

	function changeReportPeriodOffset(delta) {
	    return {
	        type: CHANGE_REPORT_PERIOD_OFFSET,
	        delta: delta
	    };
	}

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _reactRouter = __webpack_require__(205);

	var _Header = __webpack_require__(643);

	var _Header2 = _interopRequireDefault(_Header);

	var _Notifier = __webpack_require__(645);

	var _Notifier2 = _interopRequireDefault(_Notifier);

	var _i18n = __webpack_require__(267);

	var Main = _react2['default'].createClass({
	    displayName: 'Main',

	    render: function render() {
	        return _react2['default'].createElement('div', null, _react2['default'].createElement(_Header2['default'], this.props), _react2['default'].cloneElement(this.props.children, this.props), _react2['default'].createElement('footer', null, _react2['default'].createElement(_reactBootstrap.Grid, { fluid: false }, _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { md: 12 }, _react2['default'].createElement('ul', { className: 'list-unstyled' }, _react2['default'].createElement('li', null, _react2['default'].createElement(_reactRouter.Link, { to: '/credits' }, (0, _i18n.t)('Credits'))), _react2['default'].createElement('li', null, _react2['default'].createElement('a', { href: 'https://github.com/Peter-Slump/energy-dashboard' }, 'Github'))), _react2['default'].createElement('p', null, (0, _i18n.t)('Created by'), ' ', _react2['default'].createElement('a', { href: 'http://peter-slump.nl/' }, 'Peter Slump')))))), _react2['default'].createElement(_Notifier2['default'], { alerts: this.props.notification || [] }));
	    }
	});

	exports['default'] = Main;
	module.exports = exports['default'];

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _reactRouter = __webpack_require__(205);

	var _i18n = __webpack_require__(267);

	var _LanguageSelect = __webpack_require__(644);

	var _LanguageSelect2 = _interopRequireDefault(_LanguageSelect);

	var Header = _react2['default'].createClass({
	    displayName: 'Header',

	    render: function render() {
	        var _props = this.props;
	        var auth = _props.auth;
	        var user = _props.user;

	        var signedInLine = '';
	        if (auth.loggedIn) {
	            if (user.isFetching) {
	                signedInLine = (0, _i18n.t)('Fetching...');
	            } else if (user.firstName || user.lastName) {
	                signedInLine = (0, _i18n.sprintf)((0, _i18n.t)('Signed in as %s %s'), user.firstName, user.lastName);
	            } else {
	                signedInLine = (0, _i18n.sprintf)((0, _i18n.t)('Signed in as %s'), user.username);
	            }
	        } else {
	            signedInLine = (0, _i18n.t)('Not logged in');
	        }

	        return _react2['default'].createElement(_reactBootstrap.Navbar, null, _react2['default'].createElement(_reactBootstrap.Navbar.Header, null, _react2['default'].createElement(_reactBootstrap.Navbar.Brand, null, _react2['default'].createElement(_reactRouter.Link, { to: '/' }, _react2['default'].createElement('img', { alt: (0, _i18n.t)('Energy Dashboard'), title: (0, _i18n.t)('Energy Dashboard'), src: 'static/image/logo.png' }))), _react2['default'].createElement(_reactBootstrap.Navbar.Toggle, null)), _react2['default'].createElement(_reactBootstrap.Navbar.Collapse, null, _react2['default'].createElement(_reactBootstrap.Nav, { pullRight: true }, _react2['default'].createElement(_reactBootstrap.Navbar.Text, null, signedInLine), _react2['default'].createElement(_reactBootstrap.NavItem, { to: auth.loggedIn ? '/logout' : '/login' }, auth.loggedIn ? (0, _i18n.t)('Logout') : (0, _i18n.t)('Login')), _react2['default'].createElement(_LanguageSelect2['default'], this.props))));
	    }
	});

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _i18n = __webpack_require__(267);

	var LanguageSelect = _react2['default'].createClass({
	    displayName: 'LanguageSelect',

	    setLanguage: function setLanguage(code) {
	        var languageActions = this.props.languageActions;

	        languageActions.changeLanguage(code);
	    },
	    render: function render() {
	        var _this = this;

	        var language = this.props.language;

	        var languages = language.availableLanguages;

	        return _react2['default'].createElement(_reactBootstrap.Dropdown, { componentClass: 'li', id: 'language-select', className: 'language-select' }, _react2['default'].createElement(_reactBootstrap.Dropdown.Toggle, { useAnchor: true }, _react2['default'].createElement('img', { src: "static/image/flags/24x24/" + language.code + ".png" })), _react2['default'].createElement(_reactBootstrap.Dropdown.Menu, null, Object.keys(languages).map(function (key) {
	            return _react2['default'].createElement(_reactBootstrap.MenuItem, { key: key, onClick: _this.setLanguage.bind(null, key), language: key }, _react2['default'].createElement('img', { src: "static/image/flags/24x24/" + key + ".png" }));
	        })));
	    }
	});

	exports['default'] = LanguageSelect;
	module.exports = exports['default'];

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(646);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _i18n = __webpack_require__(267);

	var AlertsNotifier = _react2['default'].createClass({
		displayName: 'AlertsNotifier',

		propTypes: {
			alerts: _react2['default'].PropTypes.array.isRequired,
			onDismiss: _react2['default'].PropTypes.func
		},
		getInitialState: function getInitialState() {
			return {
				dismissedAlerts: []
			};
		},
		dismiss: function dismiss(item) {
			if (this.props.onDismiss) {
				//if callback specified, call it
				this.props.onDismiss(item);
			} else {
				//if no callback for dismissal, just update our state
				var newData = this.state.dismissedAlerts.slice();
				newData.push(item);
				this.setState({ dismissedAlerts: newData });
			}
		},
		render: function render() {
			var alerts = [];
			var enterTimeout = 500;
			var exitTimeout = 300;

			for (var i = 0; i < this.props.alerts.length; i++) {
				if (this.state.dismissedAlerts.indexOf(this.props.alerts[i]) < 0) {
					var alert = this.props.alerts[i];
					alerts.push(alert);

					if (alert.timeout) setTimeout(this.dismiss.bind(this, alert), alert.timeout + enterTimeout + exitTimeout);
				}
			}

			i = -1;
			return _react2['default'].createElement('div', { className: 'alert-notifier-container' }, _react2['default'].createElement(_reactAddonsCssTransitionGroup2['default'], { transitionName: 'alert', transitionEnterTimeout: enterTimeout, transitionLeaveTimeout: exitTimeout }, alerts.map((function (item) {
				i++;

				if (["success", "info", "warning", "danger"].indexOf(item.type) < 0) {
					item.type = "info";
				}

				var css = "alert alert-dismissible alert-" + item.type;
				var headline = item.headline ? _react2['default'].createElement('strong', null, item.headline, ' ', _react2['default'].createElement('br', null)) : null;

				return _react2['default'].createElement('div', { className: css, key: i }, _react2['default'].createElement('button', { type: 'button', className: 'close', title: (0, _i18n.t)('Dismiss'), onClick: this.dismiss.bind(this, item) }, '×'), headline, item.message);
			}).bind(this))));
		}
	});

	module.exports = AlertsNotifier;

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _i18n = __webpack_require__(267);

	var Credits = _react2['default'].createClass({
	    displayName: 'Credits',

	    render: function render() {
	        return _react2['default'].createElement(_reactBootstrap.Grid, { fluid: false }, _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { md: 12 }, _react2['default'].createElement(_reactBootstrap.PageHeader, null, (0, _i18n.t)('Credits')), _react2['default'].createElement('p', null, (0, _i18n.t)('This project is made possible with the following tools')), _react2['default'].createElement('h4', null, 'Back-end'), _react2['default'].createElement('a', { href: 'https://www.djangoproject.com/' }, 'Django project'), _react2['default'].createElement('br', null), _react2['default'].createElement('a', { href: 'http://www.django-rest-framework.org/' }, 'Django Rest Framework'), _react2['default'].createElement('h4', null, 'Front-end'), _react2['default'].createElement('a', { href: 'https://facebook.github.io/react/' }, 'React'), _react2['default'].createElement('br', null), _react2['default'].createElement('a', { href: 'https://react-bootstrap.github.io/' }, 'React Bootstrap'), _react2['default'].createElement('br', null), _react2['default'].createElement('a', { href: 'http://redux.js.org' }, 'React Redux'), _react2['default'].createElement('br', null), _react2['default'].createElement('a', { href: 'https://github.com/reactjs/react-router' }, 'React Router'), _react2['default'].createElement('h4', null, 'Styling'), _react2['default'].createElement('a', { href: 'https://getboostrap.com/' }, 'Twitter Bootstrap'), _react2['default'].createElement('br', null), _react2['default'].createElement('a', { href: 'https://bootswatch.com/paper/' }, 'Bootswatch Paper theme'))));
	    }
	});

	exports['default'] = Credits;
	module.exports = exports['default'];

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _ChartWrapper = __webpack_require__(655);

	var _ChartWrapper2 = _interopRequireDefault(_ChartWrapper);

	var _PowerMeterSelect = __webpack_require__(660);

	var _PowerMeterSelect2 = _interopRequireDefault(_PowerMeterSelect);

	var _ReadingsViewPresets = __webpack_require__(661);

	var _ReadingsViewPresets2 = _interopRequireDefault(_ReadingsViewPresets);

	var _mixinsLoginRequired = __webpack_require__(662);

	var _mixinsLoginRequired2 = _interopRequireDefault(_mixinsLoginRequired);

	var Dashboard = _react2['default'].createClass({
	    displayName: 'Dashboard',

	    mixins: [_mixinsLoginRequired2['default']],
	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        this.props.powerMeterActions.receivePowerMeters().then(function () {
	            return _this.props.reportActions.receiveReportsIfNeeded();
	        });
	    },
	    render: function render() {
	        return _react2['default'].createElement(_reactBootstrap.Grid, { fluid: false }, _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { xs: 12, md: 12 }, _react2['default'].createElement(_reactBootstrap.Panel, null, _react2['default'].createElement(_ReadingsViewPresets2['default'], this.props), _react2['default'].createElement(_reactBootstrap.Clearfix, null), _react2['default'].createElement(_ChartWrapper2['default'], this.props), _react2['default'].createElement(_PowerMeterSelect2['default'], this.props)))));
	    }
	});

	exports['default'] = Dashboard;
	module.exports = exports['default'];

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FlotChart = __webpack_require__(656);

	var _FlotChart2 = _interopRequireDefault(_FlotChart);

	var ChartWrapper = _react2['default'].createClass({
	    displayName: 'ChartWrapper',

	    render: function render() {
	        var _props = this.props;
	        var report = _props.report;
	        var powerMeter = _props.powerMeter;

	        var plotData = [];
	        var start = undefined,
	            end = new Date();
	        var stepSize = 'hour';
	        Object.keys(report).map(function (powerMeterId) {
	            var currentPowerMeter = powerMeter.powerMetersById[powerMeterId];

	            if (!currentPowerMeter.isSelected) {
	                return;
	            }

	            plotData.push({
	                data: report[powerMeterId].items.map(function (item) {
	                    var value = parseFloat(item.value_increment);
	                    if (currentPowerMeter.data.unit == 'kwh') {
	                        if (report[powerMeterId].stepSize == 'minute') {
	                            // Calculate to watt average
	                            value = value * 1000 * 60;
	                        }
	                    }
	                    return [new Date(item.datetime), value];
	                }),
	                yaxis: currentPowerMeter.data.unit == 'kwh' ? 1 : 2,
	                color: currentPowerMeter.color,
	                shadowSize: 0,
	                label: currentPowerMeter.data.name,
	                unit: currentPowerMeter.data.unit,
	                lines: {
	                    zero: false,
	                    lineWidth: 2,
	                    show: true,
	                    fill: true,
	                    steps: false
	                }
	            });
	            start = report[powerMeterId].start;
	            end = report[powerMeterId].end;
	            stepSize = report[powerMeterId].stepSize;
	        });
	        return _react2['default'].createElement(_FlotChart2['default'], { style: { height: 250 }, start: start, end: end, stepSize: stepSize, className: 'row-bottom-spacing', plotData: plotData });
	    }
	});

	exports['default'] = ChartWrapper;
	module.exports = exports['default'];

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment = __webpack_require__(273);

	var _moment2 = _interopRequireDefault(_moment);

	// we need flot and the various plugins
	__webpack_require__(657);
	__webpack_require__(658);
	__webpack_require__(659);

	var numberWithCommas = function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	var buildTooltipHandler = function buildTooltipHandler(dataSets, stepSize) {
	    return function (_l, xval, _y, flotItem) {
	        var series = flotItem.series;
	        var dataIndex = flotItem.dataIndex;

	        var time = series.data[dataIndex][0];
	        var yval = undefined,
	            unitLabel = undefined;
	        var content = '<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">';
	        content += getTime(time, series.xaxis.options.minTickSize[1]);
	        content += '</h3></div><div class="panel-body">';
	        for (var i = 0; i < dataSets.length; i++) {
	            yval = dataSets[i].data.find(function (item) {
	                return item[0].valueOf() == time.valueOf();
	            });
	            yval = yval === undefined ? '-' : numberWithCommas(yval[1]);
	            switch (dataSets[i].unit) {
	                case 'm3':
	                    unitLabel = 'm³';
	                    break;
	                case 'kwh':
	                    if (stepSize == 'minute') {
	                        unitLabel = 'Watts';
	                    } else {
	                        unitLabel = 'kWh';
	                    }
	                    break;
	                default:
	                    unitLabel = '';
	                    break;
	            }
	            content += '<strong style="color:' + dataSets[i].color + '">';
	            content += dataSets[i].label + ':</strong> ' + yval;
	            if (yval != '-') {
	                content += ' <span class="text-muted">' + unitLabel + '</span>';
	            }
	            content += '<br>';
	        }
	        content += '</div></div>';
	        return content;
	    };
	};

	var getTime = function getTime(time, stepSize) {
	    var m = (0, _moment2['default'])(time);
	    var fmt = undefined;

	    switch (stepSize) {
	        case 'minute':
	        case 'hour':
	            fmt = 'LLL';
	            break;
	        case 'day':
	            fmt = 'LL';
	            break;
	        case 'month':
	            fmt = 'MMMM YYYY';
	            break;
	        default:
	            fmt = 'LTS';
	            break;
	    }
	    return m.format(fmt);
	};

	var FlotChart = _react2['default'].createClass({
	    displayName: 'FlotChart',

	    propTypes: {
	        plotData: _react2['default'].PropTypes.array,
	        style: _react2['default'].PropTypes.object
	    },

	    componentDidMount: function componentDidMount() {
	        this.renderChart();
	        (0, _jquery2['default'])(window).resize(this.renderChart);
	    },

	    componentDidUpdate: function componentDidUpdate() {
	        this.renderChart();
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        (0, _jquery2['default'])(window).unbind('resize', this.renderChart);
	    },

	    renderChart: function renderChart(options) {
	        var series = this.props.plotData;
	        var stepSize = this.props.stepSize;
	        var plotOptions = {
	            xaxis: {
	                mode: 'time',
	                timezone: 'browser',
	                minTickSize: [1, this.props.stepSize],
	                min: this.props.start,
	                max: this.props.end,
	                color: '#666666',
	                monthNames: _moment2['default'].monthsShort('-MMM-')
	            },
	            yaxis: {
	                min: 0,
	                minTickSize: 0.001,
	                tickDecimals: 3,
	                color: '#222222'
	            },
	            yaxes: [{
	                // Watt/kWh
	                position: 'left',
	                tickFormatter: function tickFormatter(v, axis) {
	                    if (stepSize == 'minute') {
	                        return v.toFixed(0) + ' W';
	                    } else {
	                        return v.toFixed(axis.tickDecimals) + ' kWh';
	                    }
	                }
	            }, {
	                // m3
	                position: 'right',
	                tickFormatter: function tickFormatter(v, axis) {
	                    return v.toFixed(axis.tickDecimals) + ' m³';
	                }
	            }],
	            tooltip: true,
	            tooltipOpts: {
	                content: buildTooltipHandler(series, this.props.stepSize),
	                defaultTheme: false
	            },
	            grid: {
	                show: true,
	                hoverable: true,
	                backgroundColor: '#FFFFFF',
	                borderColor: '#DDDDDD',
	                borderWidth: 1,
	                color: '#666666',
	                tickColor: '#DDDDDD'
	            },
	            hoverable: false,
	            legend: {
	                noColumns: series.length,
	                position: 'nw'
	            }
	        };
	        var chart = _reactDom2['default'].findDOMNode(this.refs.chartNode);
	        _jquery2['default'].plot(chart, series, plotOptions);
	    },

	    render: function render() {
	        return _react2['default'].createElement('figure', {
	            className: this.props.className || 'chart',
	            style: this.props.style,
	            ref: 'chartNode' });
	    }
	});

	exports['default'] = FlotChart;
	module.exports = exports['default'];

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var PowerMeterSelect = _react2['default'].createClass({
	    displayName: 'PowerMeterSelect',

	    handleChange: function handleChange(e) {
	        var _props = this.props;
	        var powerMeterActions = _props.powerMeterActions;
	        var reportActions = _props.reportActions;

	        powerMeterActions.changeSelectedPowerMeter(e.target.value, e.target.checked);
	        reportActions.receiveReportsIfNeeded();
	    },
	    render: function render() {
	        var _this = this;

	        var powerMeters = this.props.powerMeter.powerMetersById;
	        return _react2['default'].createElement(_reactBootstrap.Form, { componentClass: 'fieldset', inline: true }, _react2['default'].createElement(_reactBootstrap.FormGroup, null, Object.keys(powerMeters).map(function (key) {
	            return _react2['default'].createElement(_reactBootstrap.Checkbox, { checked: powerMeters[key].isSelected, key: powerMeters[key].data.id, value: powerMeters[key].data.id, onChange: _this.handleChange }, powerMeters[key].data.name);
	        })));
	    }
	});

	exports['default'] = PowerMeterSelect;
	module.exports = exports['default'];

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _moment = __webpack_require__(273);

	var _moment2 = _interopRequireDefault(_moment);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _i18n = __webpack_require__(267);

	var ReadingsViewPresets = _react2['default'].createClass({
	    displayName: 'ReadingsViewPresets',

	    handleClick: function handleClick(e) {
	        var _props = this.props;
	        var reportPeriodActions = _props.reportPeriodActions;
	        var reportActions = _props.reportActions;

	        reportPeriodActions.changeReportPeriod(e.target.value);
	        reportActions.receiveReportsIfNeeded();
	    },
	    handleOffsetClick: function handleOffsetClick(e) {
	        var _props2 = this.props;
	        var reportPeriodActions = _props2.reportPeriodActions;
	        var reportActions = _props2.reportActions;

	        reportPeriodActions.changeReportPeriodOffset(parseInt(e.currentTarget.value));
	        reportActions.receiveReportsIfNeeded();
	    },
	    render: function render() {
	        var reportPeriod = this.props.reportPeriod;
	        var period = reportPeriod.period;
	        var offset = reportPeriod.offset;

	        var offsetLabel = '';
	        var now = (0, _moment2['default'])();
	        switch (period) {
	            case 'year':
	                switch (offset) {
	                    case 0:
	                        offsetLabel = (0, _i18n.t)('This year');
	                        break;
	                    case -1:
	                        offsetLabel = (0, _i18n.t)('Last year');
	                        break;
	                    default:
	                        now.add(offset, 'years');
	                        offsetLabel = now.format('YYYY');
	                }
	                break;

	            case 'month':
	                switch (offset) {
	                    case 0:
	                        offsetLabel = (0, _i18n.t)('This month');
	                        break;
	                    case -1:
	                        offsetLabel = (0, _i18n.t)('Last month');
	                        break;
	                    default:
	                        now.add(offset, 'months');
	                        offsetLabel = now.format(offset > -12 ? 'MMMM' : 'MMM YYYY');
	                }
	                break;

	            case 'week':
	                switch (offset) {
	                    case 0:
	                        offsetLabel = (0, _i18n.t)('This week');
	                        break;
	                    case -1:
	                        offsetLabel = (0, _i18n.t)('Last week');
	                        break;
	                    default:
	                        now.add(offset, 'weeks');
	                        offsetLabel = now.format(offset > -52 ? '[' + (0, _i18n.t)('Week:') + '] w' : '[' + (0, _i18n.t)('Week:') + '] w YYYY');
	                }
	                break;

	            case 'day':
	                switch (offset) {
	                    case 0:
	                        offsetLabel = (0, _i18n.t)('Today');
	                        break;
	                    case -1:
	                        offsetLabel = (0, _i18n.t)('Yesterday');
	                        break;
	                    case -2:
	                    case -3:
	                    case -4:
	                    case -5:
	                    case -6:
	                        now.add(offset, 'days');
	                        offsetLabel = now.format('[' + (0, _i18n.t)('Last') + '] dddd');
	                        break;
	                    default:
	                        now.add(offset, 'days');
	                        offsetLabel = now.format(offset > -365 ? 'MMMM Do' : 'MMMM Do YYYY');
	                }
	                break;
	            default:
	                offsetLabel = (0, _i18n.t)('Unknown');
	        }
	        return _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { xs: 12, md: 4, className: 'row-bottom-spacing' }, _react2['default'].createElement(_reactBootstrap.ButtonGroup, null, _react2['default'].createElement(_reactBootstrap.Button, { active: reportPeriod.period == 'year', value: 'year', onClick: this.handleClick }, (0, _i18n.t)('Year')), _react2['default'].createElement(_reactBootstrap.Button, { active: reportPeriod.period == 'month', value: 'month', onClick: this.handleClick }, (0, _i18n.t)('Month')), _react2['default'].createElement(_reactBootstrap.Button, { active: reportPeriod.period == 'week', value: 'week', onClick: this.handleClick }, (0, _i18n.t)('Week')), _react2['default'].createElement(_reactBootstrap.Button, { active: reportPeriod.period == 'day', value: 'day', onClick: this.handleClick }, (0, _i18n.t)('Day')))), _react2['default'].createElement(_reactBootstrap.Col, { xs: 12, md: 4, className: 'row-bottom-spacing' }, _react2['default'].createElement(_reactBootstrap.ButtonGroup, null, _react2['default'].createElement(_reactBootstrap.Button, { value: -1, onClick: this.handleOffsetClick }, _react2['default'].createElement(_reactBootstrap.Glyphicon, { glyph: 'chevron-left' })), _react2['default'].createElement(_reactBootstrap.Button, { value: 1, onClick: this.handleOffsetClick }, _react2['default'].createElement(_reactBootstrap.Glyphicon, { glyph: 'chevron-right' })), _react2['default'].createElement(_reactBootstrap.Button, { disabled: true }, offsetLabel))));
	    }
	});

	exports['default'] = ReadingsViewPresets;
	module.exports = exports['default'];

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _reactRouter = __webpack_require__(205);

	var LoginRequiredMixin = {
	    componentWillMount: function componentWillMount() {
	        var auth = this.props.auth;

	        if (!auth.loggedIn) {
	            _reactRouter.browserHistory.push('/login');
	        }
	    }
	};

	exports['default'] = LoginRequiredMixin;
	module.exports = exports['default'];

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(380);

	var _i18n = __webpack_require__(267);

	var Login = _react2['default'].createClass({
	    displayName: 'Login',

	    handleSubmit: function handleSubmit(e) {
	        e.preventDefault();
	        var _refs = this.refs;
	        var username = _refs.username;
	        var password = _refs.password;
	        var loginForm = _refs.loginForm;

	        this.props.authActions.login(_reactDom2['default'].findDOMNode(username).value, _reactDom2['default'].findDOMNode(password).value);
	        _reactDom2['default'].findDOMNode(loginForm).reset();
	    },
	    render: function render() {
	        return _react2['default'].createElement(_reactBootstrap.Grid, { fluid: false }, _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { xsOffset: 3, xsOffset: 0, xs: 12, mdOffset: 3, md: 6 }, _react2['default'].createElement(_reactBootstrap.Panel, null, _react2['default'].createElement('h4', null, (0, _i18n.t)('Authenticate')), _react2['default'].createElement(_reactBootstrap.Form, { horizontal: true, ref: 'loginForm', onSubmit: this.handleSubmit }, _react2['default'].createElement(_reactBootstrap.FormGroup, { controlId: 'formHorizontalEmail' }, _react2['default'].createElement(_reactBootstrap.Col, { sm: 12 }, _react2['default'].createElement(_reactBootstrap.FormControl, { type: 'text', ref: 'username', placeholder: (0, _i18n.t)('Username') }))), _react2['default'].createElement(_reactBootstrap.FormGroup, { controlId: 'formHorizontalPassword' }, _react2['default'].createElement(_reactBootstrap.Col, { sm: 12 }, _react2['default'].createElement(_reactBootstrap.FormControl, { type: 'password', ref: 'password', placeholder: (0, _i18n.t)('Password') }))), _react2['default'].createElement(_reactBootstrap.FormGroup, null, _react2['default'].createElement(_reactBootstrap.Col, { sm: 12 }, _react2['default'].createElement(_reactBootstrap.Button, { type: 'submit' }, (0, _i18n.t)('Login')))))))));
	    }
	});

	exports['default'] = Login;
	module.exports = exports['default'];

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(380);

	var _reactRouter = __webpack_require__(205);

	var _i18n = __webpack_require__(267);

	var Logout = _react2['default'].createClass({
	    displayName: 'Logout',

	    componentDidMount: function componentDidMount() {
	        this.props.authActions.logout().then(function () {
	            return _reactRouter.browserHistory.push('/login');
	        });
	    },
	    render: function render() {
	        return _react2['default'].createElement(_reactBootstrap.Grid, { fluid: false }, _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { md: 12 }, _react2['default'].createElement('p', null, (0, _i18n.t)('Logging you out...')))));
	    }
	});

	exports['default'] = Logout;
	module.exports = exports['default'];

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _redux = __webpack_require__(180);

	var _reduxThunk = __webpack_require__(666);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reactRouter = __webpack_require__(205);

	var _reactRouterRedux = __webpack_require__(667);

	var _jsCookie = __webpack_require__(203);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	// import the root reducer

	var _reducersIndex = __webpack_require__(672);

	var _reducersIndex2 = _interopRequireDefault(_reducersIndex);

	var _actionsUser = __webpack_require__(266);

	var _actionsLanguage = __webpack_require__(272);

	var store = (0, _redux.createStore)(_reducersIndex2['default'], (0, _redux.applyMiddleware)(_reduxThunk2['default']));

	// Load user on startup
	store.dispatch((0, _actionsUser.fetchUser)()).then(function (data) {
	    (0, _actionsLanguage.changeLanguage)(_jsCookie2['default'].get('lang') || 'en');
	}).then(function (data) {
	    _reactRouter.browserHistory.push('/');
	});

	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	exports.history = history;
	exports['default'] = store;

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _redux = __webpack_require__(180);

	var _reactRouterRedux = __webpack_require__(667);

	// Import other reducers

	var _api = __webpack_require__(673);

	var _api2 = _interopRequireDefault(_api);

	var _auth = __webpack_require__(674);

	var _auth2 = _interopRequireDefault(_auth);

	var _language = __webpack_require__(675);

	var _language2 = _interopRequireDefault(_language);

	var _notification = __webpack_require__(676);

	var _notification2 = _interopRequireDefault(_notification);

	var _powerMeter = __webpack_require__(677);

	var _powerMeter2 = _interopRequireDefault(_powerMeter);

	var _report = __webpack_require__(678);

	var _report2 = _interopRequireDefault(_report);

	var _reportPeriod = __webpack_require__(679);

	var _reportPeriod2 = _interopRequireDefault(_reportPeriod);

	var _user = __webpack_require__(680);

	var _user2 = _interopRequireDefault(_user);

	// Map the reducers to the appropriate part of the state
	var rootReducer = (0, _redux.combineReducers)({
	    api: _api2['default'],
	    auth: _auth2['default'],
	    language: _language2['default'],
	    notification: _notification2['default'],
	    powerMeter: _powerMeter2['default'],
	    report: _report2['default'],
	    reportPeriod: _reportPeriod2['default'],
	    routing: _reactRouterRedux.routerReducer,
	    user: _user2['default']
	});

	exports['default'] = rootReducer;
	module.exports = exports['default'];

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = api;

	var _actionsApi = __webpack_require__(202);

	function api(state, action) {
	    if (state === undefined) state = {
	        currentRequests: 0,
	        errors: [],
	        shownErrorIndex: 0
	    };

	    switch (action.type) {
	        case _actionsApi.API_REQUEST_SUCCESS:
	            return Object.assign({}, state, {
	                currentRequests: state.currentRequests - 1
	            });

	        case _actionsApi.API_REQUEST:
	            return Object.assign({}, state, {
	                currentRequests: state.currentRequests + 1
	            });

	        case _actionsApi.API_REQUEST_FAILED:
	            var state = Object.assign({}, state, {
	                currentRequests: state.currentRequests - 1
	            });
	            //            if( action.code != 403 ){
	            state.errors.push(action.error);
	            //            }
	            return state;

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = auth;

	var _actionsAuth = __webpack_require__(265);

	var _actionsUser = __webpack_require__(266);

	function auth(state, action) {
	    if (state === undefined) state = {
	        loggedIn: false,
	        key: null
	    };

	    switch (action.type) {
	        case _actionsUser.RECEIVE_USER:
	            return Object.assign({}, state, {
	                loggedIn: true
	            });

	        case _actionsAuth.AUTH_LOGGED_IN:
	            return Object.assign({}, state, {
	                loggedIn: true,
	                key: action.key
	            });

	        case _actionsAuth.AUTH_LOGGED_OUT:
	            return Object.assign({}, state, {
	                loggedIn: false,
	                key: null
	            });

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = language;

	var _actionsLanguage = __webpack_require__(272);

	var _i18n = __webpack_require__(267);

	var initial = {
	    code: 'GB',
	    availableLanguages: {
	        'NL': 'Dutch',
	        'GB': 'English'
	    }
	};

	function language(state, action) {
	    if (state === undefined) state = initial;

	    switch (action.type) {
	        case _actionsLanguage.LANGUAGE_CHANGED:
	            return Object.assign({}, state, {
	                code: action.code
	            });

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = notification;

	var _actionsNotification = __webpack_require__(264);

	function notification(state, action) {
	    if (state === undefined) state = [];

	    switch (action.type) {
	        case _actionsNotification.NOTIFICATION_ADD:
	            return state + [{
	                message: action.message,
	                type: action.level,
	                headline: action.headline,
	                timeout: action.timeout
	            }];

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = powerMeters;

	var _actionsPowerMeter = __webpack_require__(376);

	var _actionsAuth = __webpack_require__(265);

	var COLORS = ['#2196F3', '#4CAF50', '#9C27B0', '#ff9800', '#e51c23'];

	function powerMeter(state, action) {
	    if (state === undefined) state = {
	        data: null,
	        isSelected: true
	    };

	    switch (action.type) {
	        case _actionsPowerMeter.CHANGE_SELECTED_POWER_METER:
	            return Object.assign({}, state, {
	                isSelected: action.isSelected
	            });
	        case _actionsPowerMeter.FETCH_POWER_METERS_SUCCESS:
	            return Object.assign({}, state, {
	                data: action.data,
	                color: action.color
	            });
	        default:
	            return state;
	    }
	}

	var initial = {
	    isFetching: false,
	    error: null,
	    powerMetersById: {}
	};

	function powerMeters(state, action) {
	    if (state === undefined) state = initial;

	    var new_state = null;
	    switch (action.type) {
	        case _actionsAuth.AUTH_LOGGED_OUT:
	            return initial;

	        case _actionsPowerMeter.CHANGE_SELECTED_POWER_METER:
	            new_state = Object.assign({}, state);
	            new_state.powerMetersById[action.id] = powerMeter(state.powerMetersById[action.id], action);
	            return new_state;

	        case _actionsPowerMeter.FETCH_POWER_METERS:
	            return Object.assign({}, state, {
	                isFetching: true
	            });

	        case _actionsPowerMeter.FETCH_POWER_METERS_SUCCESS:
	            new_state = Object.assign({}, state, {
	                isFetching: false
	            });
	            action.powerMeters.forEach(function (item, i) {
	                new_state.powerMetersById[item.id] = powerMeter(state.powerMetersById[item.id], Object.assign({}, action, { data: item, color: COLORS[(i + 1) % COLORS.length - 1] }));
	            });
	            return new_state;

	        case _actionsPowerMeter.FETCH_POWER_METERS_FAILED:
	            return Object.assign({}, state, {
	                isFetching: false,
	                error: action.error
	            });

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = reports;

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _store = __webpack_require__(665);

	var _store2 = _interopRequireDefault(_store);

	var _actionsReport = __webpack_require__(377);

	var _actionsAuth = __webpack_require__(265);

	function report(state, action) {
	    if (state === undefined) state = {
	        items: [],
	        isFetching: false,
	        error: null,
	        start: null,
	        end: null,
	        stepSize: null,
	        didInvalidate: false
	    };

	    switch (action.type) {
	        case _actionsReport.INVALIDATE_REPORT:
	            return Object.assign({}, state, {
	                didInvalidate: true
	            });

	        case _actionsReport.FETCH_REPORT:
	            return Object.assign({}, state, {
	                isFetching: true,
	                didInvalidate: false
	            });

	        case _actionsReport.FETCH_REPORT_SUCCESS:
	            return Object.assign({}, state, {
	                isFetching: false,
	                didInvalidate: false,
	                items: action.report,
	                start: action.start,
	                end: action.end,
	                stepSize: action.stepSize,
	                error: null
	            });
	        case _actionsReport.FETCH_REPORT_FAILED:
	            return Object.assign({}, state, {
	                isFetching: false,
	                error: action.error
	            });
	        default:
	            return state;
	    }
	}

	function reports(state, action) {
	    if (state === undefined) state = {};

	    switch (action.type) {
	        case _actionsAuth.AUTH_LOGGED_OUT:
	            // Empty state
	            return {};

	        case _actionsReport.INVALIDATE_REPORT:
	        case _actionsReport.FETCH_REPORT:
	        case _actionsReport.FETCH_REPORT_SUCCESS:
	        case _actionsReport.FETCH_REPORT_FAILED:
	            return Object.assign({}, state, _defineProperty({}, action.powerMeterId, report(state[action.powerMeterId], action)));

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = reportPeriod;

	var _actionsReportPeriod = __webpack_require__(378);

	var _actionsAuth = __webpack_require__(265);

	var initial = { period: 'day', offset: 0 };

	function reportPeriod(state, action) {
	    if (state === undefined) state = initial;

	    switch (action.type) {
	        case _actionsAuth.AUTH_LOGGED_OUT:
	            // Put back to initial state
	            return initial;

	        case _actionsReportPeriod.CHANGE_REPORT_PERIOD:
	            return Object.assign({}, state, {
	                period: action.period,
	                offset: 0
	            });

	        case _actionsReportPeriod.CHANGE_REPORT_PERIOD_OFFSET:
	            var offset = state.offset;
	            offset += action.delta;
	            return Object.assign({}, state, {
	                offset: offset > 0 ? 0 : offset
	            });

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = auth;

	var _actionsUser = __webpack_require__(266);

	var _actionsAuth = __webpack_require__(265);

	var initial = {
	    username: null,
	    firstName: null,
	    lastName: null,
	    email: null,
	    isFetching: false
	};

	function auth(state, action) {
	    if (state === undefined) state = initial;

	    switch (action.type) {
	        case _actionsUser.REQUEST_USER:
	            return Object.assign({}, state, {
	                isFetching: true
	            });

	        case _actionsUser.RECEIVE_USER:
	            return Object.assign({}, state, {
	                isFetching: false,
	                username: action.username,
	                firstName: action.firstName,
	                lastName: action.lastName,
	                email: action.email
	            });

	        case _actionsAuth.AUTH_LOGGED_OUT:
	            return initial;

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ }

});