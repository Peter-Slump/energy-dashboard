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

	var _componentsCredits = __webpack_require__(650);

	var _componentsCredits2 = _interopRequireDefault(_componentsCredits);

	var _componentsDashboard = __webpack_require__(651);

	var _componentsDashboard2 = _interopRequireDefault(_componentsDashboard);

	var _componentsLogin = __webpack_require__(660);

	var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

	var _componentsLogout = __webpack_require__(661);

	var _componentsLogout2 = _interopRequireDefault(_componentsLogout);

	// Import router dependencies

	var _reactRouter = __webpack_require__(205);

	// Import Redux dependencies

	var _reactRedux = __webpack_require__(193);

	var _store = __webpack_require__(662);

	var _store2 = _interopRequireDefault(_store);

	// Set some default jQuery AJAX settings

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _jsCookie = __webpack_require__(203);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

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
	exports.push([module.id, ".row-bottom-spacing {\n  margin-bottom: 20px;\n}\n.navbar-brand img {\n  width: 25px;\n}\n.alert-notifier-container {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 250px;\n  padding: 5px;\n  z-index: 9999;\n}\n.alert-notifier-container .alert-enter {\n  opacity: 0.01;\n  transition: opacity 0.25s ease-in;\n}\n.alert-notifier-container .alert-enter.alert-enter-active {\n  opacity: 1;\n}\n.alert-notifier-container .alert-leave {\n  opacity: 1;\n  transition: opacity 0.25s ease-in;\n}\n.alert-notifier-container .alert-leave.alert-leave-active {\n  opacity: 0.01;\n}\nfooter {\n  margin: 5em 0;\n}\nfooter li {\n  float: left;\n  margin-bottom: 1.5em;\n  margin-right: 1.5em;\n}\nfooter p {\n  clear: left;\n  margin-bottom: 0;\n}\n", ""]);

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

	var _actionsNotification = __webpack_require__(264);

	var notificationActions = _interopRequireWildcard(_actionsNotification);

	var _actionsPowerMeter = __webpack_require__(271);

	var powerMeterActions = _interopRequireWildcard(_actionsPowerMeter);

	var _actionsReport = __webpack_require__(272);

	var reportActions = _interopRequireWildcard(_actionsReport);

	var _actionsReportPeriod = __webpack_require__(376);

	var reportPeriodActions = _interopRequireWildcard(_actionsReportPeriod);

	var _actionsUser = __webpack_require__(266);

	var userActions = _interopRequireWildcard(_actionsUser);

	var _Main = __webpack_require__(377);

	var _Main2 = _interopRequireDefault(_Main);

	// Make sure the store values are available to all components
	function mapStateToProps(state) {
	    return {
	        api: state.api,
	        auth: state.auth,
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

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _jed = __webpack_require__(268);

	var _jed2 = _interopRequireDefault(_jed);

	function getTranslations(locale) {
	    return __webpack_require__(269)("./" + locale + '.po');
	}

	var i18n = null;

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

	setLocale('nl');

	function gettext(key) {
	    var _i18n$translate;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    return (_i18n$translate = i18n.translate(key)).fetch.apply(_i18n$translate, args);
	}

	function ngettext(singular, plural, n) {
	    var _i18n$translate$ifPlural;

	    for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	        args[_key2 - 3] = arguments[_key2];
	    }

	    return (_i18n$translate$ifPlural = i18n.translate(singular).ifPlural(n, plural)).fetch.apply(_i18n$translate$ifPlural, [n].concat(args));
	}

	var t = gettext;
	exports.t = t;
	var tn = ngettext;
	exports.tn = tn;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @preserve jed.js https://github.com/SlexAxton/Jed
	 */
	/*
	-----------
	A gettext compatible i18n library for modern JavaScript Applications

	by Alex Sexton - AlexSexton [at] gmail - @SlexAxton

	MIT License

	A jQuery Foundation project - requires CLA to contribute -
	https://contribute.jquery.org/CLA/



	Jed offers the entire applicable GNU gettext spec'd set of
	functions, but also offers some nicer wrappers around them.
	The api for gettext was written for a language with no function
	overloading, so Jed allows a little more of that.

	Many thanks to Joshua I. Miller - unrtst@cpan.org - who wrote
	gettext.js back in 2008. I was able to vet a lot of my ideas
	against his. I also made sure Jed passed against his tests
	in order to offer easy upgrades -- jsgettext.berlios.de
	*/
	(function (root, undef) {

	  // Set up some underscore-style functions, if you already have
	  // underscore, feel free to delete this section, and use it
	  // directly, however, the amount of functions used doesn't
	  // warrant having underscore as a full dependency.
	  // Underscore 1.3.0 was used to port and is licensed
	  // under the MIT License by Jeremy Ashkenas.
	  var ArrayProto    = Array.prototype,
	      ObjProto      = Object.prototype,
	      slice         = ArrayProto.slice,
	      hasOwnProp    = ObjProto.hasOwnProperty,
	      nativeForEach = ArrayProto.forEach,
	      breaker       = {};

	  // We're not using the OOP style _ so we don't need the
	  // extra level of indirection. This still means that you
	  // sub out for real `_` though.
	  var _ = {
	    forEach : function( obj, iterator, context ) {
	      var i, l, key;
	      if ( obj === null ) {
	        return;
	      }

	      if ( nativeForEach && obj.forEach === nativeForEach ) {
	        obj.forEach( iterator, context );
	      }
	      else if ( obj.length === +obj.length ) {
	        for ( i = 0, l = obj.length; i < l; i++ ) {
	          if ( i in obj && iterator.call( context, obj[i], i, obj ) === breaker ) {
	            return;
	          }
	        }
	      }
	      else {
	        for ( key in obj) {
	          if ( hasOwnProp.call( obj, key ) ) {
	            if ( iterator.call (context, obj[key], key, obj ) === breaker ) {
	              return;
	            }
	          }
	        }
	      }
	    },
	    extend : function( obj ) {
	      this.forEach( slice.call( arguments, 1 ), function ( source ) {
	        for ( var prop in source ) {
	          obj[prop] = source[prop];
	        }
	      });
	      return obj;
	    }
	  };
	  // END Miniature underscore impl

	  // Jed is a constructor function
	  var Jed = function ( options ) {
	    // Some minimal defaults
	    this.defaults = {
	      "locale_data" : {
	        "messages" : {
	          "" : {
	            "domain"       : "messages",
	            "lang"         : "en",
	            "plural_forms" : "nplurals=2; plural=(n != 1);"
	          }
	          // There are no default keys, though
	        }
	      },
	      // The default domain if one is missing
	      "domain" : "messages",
	      // enable debug mode to log untranslated strings to the console
	      "debug" : false
	    };

	    // Mix in the sent options with the default options
	    this.options = _.extend( {}, this.defaults, options );
	    this.textdomain( this.options.domain );

	    if ( options.domain && ! this.options.locale_data[ this.options.domain ] ) {
	      throw new Error('Text domain set to non-existent domain: `' + options.domain + '`');
	    }
	  };

	  // The gettext spec sets this character as the default
	  // delimiter for context lookups.
	  // e.g.: context\u0004key
	  // If your translation company uses something different,
	  // just change this at any time and it will use that instead.
	  Jed.context_delimiter = String.fromCharCode( 4 );

	  function getPluralFormFunc ( plural_form_string ) {
	    return Jed.PF.compile( plural_form_string || "nplurals=2; plural=(n != 1);");
	  }

	  function Chain( key, i18n ){
	    this._key = key;
	    this._i18n = i18n;
	  }

	  // Create a chainable api for adding args prettily
	  _.extend( Chain.prototype, {
	    onDomain : function ( domain ) {
	      this._domain = domain;
	      return this;
	    },
	    withContext : function ( context ) {
	      this._context = context;
	      return this;
	    },
	    ifPlural : function ( num, pkey ) {
	      this._val = num;
	      this._pkey = pkey;
	      return this;
	    },
	    fetch : function ( sArr ) {
	      if ( {}.toString.call( sArr ) != '[object Array]' ) {
	        sArr = [].slice.call(arguments, 0);
	      }
	      return ( sArr && sArr.length ? Jed.sprintf : function(x){ return x; } )(
	        this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val),
	        sArr
	      );
	    }
	  });

	  // Add functions to the Jed prototype.
	  // These will be the functions on the object that's returned
	  // from creating a `new Jed()`
	  // These seem redundant, but they gzip pretty well.
	  _.extend( Jed.prototype, {
	    // The sexier api start point
	    translate : function ( key ) {
	      return new Chain( key, this );
	    },

	    textdomain : function ( domain ) {
	      if ( ! domain ) {
	        return this._textdomain;
	      }
	      this._textdomain = domain;
	    },

	    gettext : function ( key ) {
	      return this.dcnpgettext.call( this, undef, undef, key );
	    },

	    dgettext : function ( domain, key ) {
	     return this.dcnpgettext.call( this, domain, undef, key );
	    },

	    dcgettext : function ( domain , key /*, category */ ) {
	      // Ignores the category anyways
	      return this.dcnpgettext.call( this, domain, undef, key );
	    },

	    ngettext : function ( skey, pkey, val ) {
	      return this.dcnpgettext.call( this, undef, undef, skey, pkey, val );
	    },

	    dngettext : function ( domain, skey, pkey, val ) {
	      return this.dcnpgettext.call( this, domain, undef, skey, pkey, val );
	    },

	    dcngettext : function ( domain, skey, pkey, val/*, category */) {
	      return this.dcnpgettext.call( this, domain, undef, skey, pkey, val );
	    },

	    pgettext : function ( context, key ) {
	      return this.dcnpgettext.call( this, undef, context, key );
	    },

	    dpgettext : function ( domain, context, key ) {
	      return this.dcnpgettext.call( this, domain, context, key );
	    },

	    dcpgettext : function ( domain, context, key/*, category */) {
	      return this.dcnpgettext.call( this, domain, context, key );
	    },

	    npgettext : function ( context, skey, pkey, val ) {
	      return this.dcnpgettext.call( this, undef, context, skey, pkey, val );
	    },

	    dnpgettext : function ( domain, context, skey, pkey, val ) {
	      return this.dcnpgettext.call( this, domain, context, skey, pkey, val );
	    },

	    // The most fully qualified gettext function. It has every option.
	    // Since it has every option, we can use it from every other method.
	    // This is the bread and butter.
	    // Technically there should be one more argument in this function for 'Category',
	    // but since we never use it, we might as well not waste the bytes to define it.
	    dcnpgettext : function ( domain, context, singular_key, plural_key, val ) {
	      // Set some defaults

	      plural_key = plural_key || singular_key;

	      // Use the global domain default if one
	      // isn't explicitly passed in
	      domain = domain || this._textdomain;

	      var fallback;

	      // Handle special cases

	      // No options found
	      if ( ! this.options ) {
	        // There's likely something wrong, but we'll return the correct key for english
	        // We do this by instantiating a brand new Jed instance with the default set
	        // for everything that could be broken.
	        fallback = new Jed();
	        return fallback.dcnpgettext.call( fallback, undefined, undefined, singular_key, plural_key, val );
	      }

	      // No translation data provided
	      if ( ! this.options.locale_data ) {
	        throw new Error('No locale data provided.');
	      }

	      if ( ! this.options.locale_data[ domain ] ) {
	        throw new Error('Domain `' + domain + '` was not found.');
	      }

	      if ( ! this.options.locale_data[ domain ][ "" ] ) {
	        throw new Error('No locale meta information provided.');
	      }

	      // Make sure we have a truthy key. Otherwise we might start looking
	      // into the empty string key, which is the options for the locale
	      // data.
	      if ( ! singular_key ) {
	        throw new Error('No translation key found.');
	      }

	      var key  = context ? context + Jed.context_delimiter + singular_key : singular_key,
	          locale_data = this.options.locale_data,
	          dict = locale_data[ domain ],
	          defaultConf = (locale_data.messages || this.defaults.locale_data.messages)[""],
	          pluralForms = dict[""].plural_forms || dict[""]["Plural-Forms"] || dict[""]["plural-forms"] || defaultConf.plural_forms || defaultConf["Plural-Forms"] || defaultConf["plural-forms"],
	          val_list,
	          res;

	      var val_idx;
	      if (val === undefined) {
	        // No value passed in; assume singular key lookup.
	        val_idx = 0;

	      } else {
	        // Value has been passed in; use plural-forms calculations.

	        // Handle invalid numbers, but try casting strings for good measure
	        if ( typeof val != 'number' ) {
	          val = parseInt( val, 10 );

	          if ( isNaN( val ) ) {
	            throw new Error('The number that was passed in is not a number.');
	          }
	        }

	        val_idx = getPluralFormFunc(pluralForms)(val);
	      }

	      // Throw an error if a domain isn't found
	      if ( ! dict ) {
	        throw new Error('No domain named `' + domain + '` could be found.');
	      }

	      val_list = dict[ key ];

	      // If there is no match, then revert back to
	      // english style singular/plural with the keys passed in.
	      if ( ! val_list || val_idx > val_list.length ) {
	        if (this.options.missing_key_callback) {
	          this.options.missing_key_callback(key, domain);
	        }
	        res = [ singular_key, plural_key ];

	        // collect untranslated strings
	        if (this.options.debug===true) {
	          console.log(res[ getPluralFormFunc(pluralForms)( val ) ]);
	        }
	        return res[ getPluralFormFunc()( val ) ];
	      }

	      res = val_list[ val_idx ];

	      // This includes empty strings on purpose
	      if ( ! res  ) {
	        res = [ singular_key, plural_key ];
	        return res[ getPluralFormFunc()( val ) ];
	      }
	      return res;
	    }
	  });


	  // We add in sprintf capabilities for post translation value interolation
	  // This is not internally used, so you can remove it if you have this
	  // available somewhere else, or want to use a different system.

	  // We _slightly_ modify the normal sprintf behavior to more gracefully handle
	  // undefined values.

	  /**
	   sprintf() for JavaScript 0.7-beta1
	   http://www.diveintojavascript.com/projects/javascript-sprintf

	   Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
	   All rights reserved.

	   Redistribution and use in source and binary forms, with or without
	   modification, are permitted provided that the following conditions are met:
	       * Redistributions of source code must retain the above copyright
	         notice, this list of conditions and the following disclaimer.
	       * Redistributions in binary form must reproduce the above copyright
	         notice, this list of conditions and the following disclaimer in the
	         documentation and/or other materials provided with the distribution.
	       * Neither the name of sprintf() for JavaScript nor the
	         names of its contributors may be used to endorse or promote products
	         derived from this software without specific prior written permission.

	   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
	   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	   DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
	   DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	   ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  */
	  var sprintf = (function() {
	    function get_type(variable) {
	      return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	    }
	    function str_repeat(input, multiplier) {
	      for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
	      return output.join('');
	    }

	    var str_format = function() {
	      if (!str_format.cache.hasOwnProperty(arguments[0])) {
	        str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
	      }
	      return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	    };

	    str_format.format = function(parse_tree, argv) {
	      var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
	      for (i = 0; i < tree_length; i++) {
	        node_type = get_type(parse_tree[i]);
	        if (node_type === 'string') {
	          output.push(parse_tree[i]);
	        }
	        else if (node_type === 'array') {
	          match = parse_tree[i]; // convenience purposes only
	          if (match[2]) { // keyword argument
	            arg = argv[cursor];
	            for (k = 0; k < match[2].length; k++) {
	              if (!arg.hasOwnProperty(match[2][k])) {
	                throw(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
	              }
	              arg = arg[match[2][k]];
	            }
	          }
	          else if (match[1]) { // positional argument (explicit)
	            arg = argv[match[1]];
	          }
	          else { // positional argument (implicit)
	            arg = argv[cursor++];
	          }

	          if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
	            throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));
	          }

	          // Jed EDIT
	          if ( typeof arg == 'undefined' || arg === null ) {
	            arg = '';
	          }
	          // Jed EDIT

	          switch (match[8]) {
	            case 'b': arg = arg.toString(2); break;
	            case 'c': arg = String.fromCharCode(arg); break;
	            case 'd': arg = parseInt(arg, 10); break;
	            case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
	            case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
	            case 'o': arg = arg.toString(8); break;
	            case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
	            case 'u': arg = Math.abs(arg); break;
	            case 'x': arg = arg.toString(16); break;
	            case 'X': arg = arg.toString(16).toUpperCase(); break;
	          }
	          arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
	          pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
	          pad_length = match[6] - String(arg).length;
	          pad = match[6] ? str_repeat(pad_character, pad_length) : '';
	          output.push(match[5] ? arg + pad : pad + arg);
	        }
	      }
	      return output.join('');
	    };

	    str_format.cache = {};

	    str_format.parse = function(fmt) {
	      var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
	      while (_fmt) {
	        if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
	          parse_tree.push(match[0]);
	        }
	        else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
	          parse_tree.push('%');
	        }
	        else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
	          if (match[2]) {
	            arg_names |= 1;
	            var field_list = [], replacement_field = match[2], field_match = [];
	            if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
	              field_list.push(field_match[1]);
	              while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
	                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
	                  field_list.push(field_match[1]);
	                }
	                else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
	                  field_list.push(field_match[1]);
	                }
	                else {
	                  throw('[sprintf] huh?');
	                }
	              }
	            }
	            else {
	              throw('[sprintf] huh?');
	            }
	            match[2] = field_list;
	          }
	          else {
	            arg_names |= 2;
	          }
	          if (arg_names === 3) {
	            throw('[sprintf] mixing positional and named placeholders is not (yet) supported');
	          }
	          parse_tree.push(match);
	        }
	        else {
	          throw('[sprintf] huh?');
	        }
	        _fmt = _fmt.substring(match[0].length);
	      }
	      return parse_tree;
	    };

	    return str_format;
	  })();

	  var vsprintf = function(fmt, argv) {
	    argv.unshift(fmt);
	    return sprintf.apply(null, argv);
	  };

	  Jed.parse_plural = function ( plural_forms, n ) {
	    plural_forms = plural_forms.replace(/n/g, n);
	    return Jed.parse_expression(plural_forms);
	  };

	  Jed.sprintf = function ( fmt, args ) {
	    if ( {}.toString.call( args ) == '[object Array]' ) {
	      return vsprintf( fmt, [].slice.call(args) );
	    }
	    return sprintf.apply(this, [].slice.call(arguments) );
	  };

	  Jed.prototype.sprintf = function () {
	    return Jed.sprintf.apply(this, arguments);
	  };
	  // END sprintf Implementation

	  // Start the Plural forms section
	  // This is a full plural form expression parser. It is used to avoid
	  // running 'eval' or 'new Function' directly against the plural
	  // forms.
	  //
	  // This can be important if you get translations done through a 3rd
	  // party vendor. I encourage you to use this instead, however, I
	  // also will provide a 'precompiler' that you can use at build time
	  // to output valid/safe function representations of the plural form
	  // expressions. This means you can build this code out for the most
	  // part.
	  Jed.PF = {};

	  Jed.PF.parse = function ( p ) {
	    var plural_str = Jed.PF.extractPluralExpr( p );
	    return Jed.PF.parser.parse.call(Jed.PF.parser, plural_str);
	  };

	  Jed.PF.compile = function ( p ) {
	    // Handle trues and falses as 0 and 1
	    function imply( val ) {
	      return (val === true ? 1 : val ? val : 0);
	    }

	    var ast = Jed.PF.parse( p );
	    return function ( n ) {
	      return imply( Jed.PF.interpreter( ast )( n ) );
	    };
	  };

	  Jed.PF.interpreter = function ( ast ) {
	    return function ( n ) {
	      var res;
	      switch ( ast.type ) {
	        case 'GROUP':
	          return Jed.PF.interpreter( ast.expr )( n );
	        case 'TERNARY':
	          if ( Jed.PF.interpreter( ast.expr )( n ) ) {
	            return Jed.PF.interpreter( ast.truthy )( n );
	          }
	          return Jed.PF.interpreter( ast.falsey )( n );
	        case 'OR':
	          return Jed.PF.interpreter( ast.left )( n ) || Jed.PF.interpreter( ast.right )( n );
	        case 'AND':
	          return Jed.PF.interpreter( ast.left )( n ) && Jed.PF.interpreter( ast.right )( n );
	        case 'LT':
	          return Jed.PF.interpreter( ast.left )( n ) < Jed.PF.interpreter( ast.right )( n );
	        case 'GT':
	          return Jed.PF.interpreter( ast.left )( n ) > Jed.PF.interpreter( ast.right )( n );
	        case 'LTE':
	          return Jed.PF.interpreter( ast.left )( n ) <= Jed.PF.interpreter( ast.right )( n );
	        case 'GTE':
	          return Jed.PF.interpreter( ast.left )( n ) >= Jed.PF.interpreter( ast.right )( n );
	        case 'EQ':
	          return Jed.PF.interpreter( ast.left )( n ) == Jed.PF.interpreter( ast.right )( n );
	        case 'NEQ':
	          return Jed.PF.interpreter( ast.left )( n ) != Jed.PF.interpreter( ast.right )( n );
	        case 'MOD':
	          return Jed.PF.interpreter( ast.left )( n ) % Jed.PF.interpreter( ast.right )( n );
	        case 'VAR':
	          return n;
	        case 'NUM':
	          return ast.val;
	        default:
	          throw new Error("Invalid Token found.");
	      }
	    };
	  };

	  Jed.PF.extractPluralExpr = function ( p ) {
	    // trim first
	    p = p.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

	    if (! /;\s*$/.test(p)) {
	      p = p.concat(';');
	    }

	    var nplurals_re = /nplurals\=(\d+);/,
	        plural_re = /plural\=(.*);/,
	        nplurals_matches = p.match( nplurals_re ),
	        res = {},
	        plural_matches;

	    // Find the nplurals number
	    if ( nplurals_matches.length > 1 ) {
	      res.nplurals = nplurals_matches[1];
	    }
	    else {
	      throw new Error('nplurals not found in plural_forms string: ' + p );
	    }

	    // remove that data to get to the formula
	    p = p.replace( nplurals_re, "" );
	    plural_matches = p.match( plural_re );

	    if (!( plural_matches && plural_matches.length > 1 ) ) {
	      throw new Error('`plural` expression not found: ' + p);
	    }
	    return plural_matches[ 1 ];
	  };

	  /* Jison generated parser */
	  Jed.PF.parser = (function(){

	var parser = {trace: function trace() { },
	yy: {},
	symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,"n":19,"NUMBER":20,"$accept":0,"$end":1},
	terminals_: {2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},
	productions_: [0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],
	performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

	var $0 = $$.length - 1;
	switch (yystate) {
	case 1: return { type : 'GROUP', expr: $$[$0-1] };
	break;
	case 2:this.$ = { type: 'TERNARY', expr: $$[$0-4], truthy : $$[$0-2], falsey: $$[$0] };
	break;
	case 3:this.$ = { type: "OR", left: $$[$0-2], right: $$[$0] };
	break;
	case 4:this.$ = { type: "AND", left: $$[$0-2], right: $$[$0] };
	break;
	case 5:this.$ = { type: 'LT', left: $$[$0-2], right: $$[$0] };
	break;
	case 6:this.$ = { type: 'LTE', left: $$[$0-2], right: $$[$0] };
	break;
	case 7:this.$ = { type: 'GT', left: $$[$0-2], right: $$[$0] };
	break;
	case 8:this.$ = { type: 'GTE', left: $$[$0-2], right: $$[$0] };
	break;
	case 9:this.$ = { type: 'NEQ', left: $$[$0-2], right: $$[$0] };
	break;
	case 10:this.$ = { type: 'EQ', left: $$[$0-2], right: $$[$0] };
	break;
	case 11:this.$ = { type: 'MOD', left: $$[$0-2], right: $$[$0] };
	break;
	case 12:this.$ = { type: 'GROUP', expr: $$[$0-1] };
	break;
	case 13:this.$ = { type: 'VAR' };
	break;
	case 14:this.$ = { type: 'NUM', val: Number(yytext) };
	break;
	}
	},
	table: [{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],
	defaultActions: {6:[2,1]},
	parseError: function parseError(str, hash) {
	    throw new Error(str);
	},
	parse: function parse(input) {
	    var self = this,
	        stack = [0],
	        vstack = [null], // semantic value stack
	        lstack = [], // location stack
	        table = this.table,
	        yytext = '',
	        yylineno = 0,
	        yyleng = 0,
	        recovering = 0,
	        TERROR = 2,
	        EOF = 1;

	    //this.reductionCount = this.shiftCount = 0;

	    this.lexer.setInput(input);
	    this.lexer.yy = this.yy;
	    this.yy.lexer = this.lexer;
	    if (typeof this.lexer.yylloc == 'undefined')
	        this.lexer.yylloc = {};
	    var yyloc = this.lexer.yylloc;
	    lstack.push(yyloc);

	    if (typeof this.yy.parseError === 'function')
	        this.parseError = this.yy.parseError;

	    function popStack (n) {
	        stack.length = stack.length - 2*n;
	        vstack.length = vstack.length - n;
	        lstack.length = lstack.length - n;
	    }

	    function lex() {
	        var token;
	        token = self.lexer.lex() || 1; // $end = 1
	        // if token isn't its numeric value, convert
	        if (typeof token !== 'number') {
	            token = self.symbols_[token] || token;
	        }
	        return token;
	    }

	    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
	    while (true) {
	        // retreive state number from top of stack
	        state = stack[stack.length-1];

	        // use default actions if available
	        if (this.defaultActions[state]) {
	            action = this.defaultActions[state];
	        } else {
	            if (symbol == null)
	                symbol = lex();
	            // read action for current state and first input
	            action = table[state] && table[state][symbol];
	        }

	        // handle parse error
	        _handle_error:
	        if (typeof action === 'undefined' || !action.length || !action[0]) {

	            if (!recovering) {
	                // Report error
	                expected = [];
	                for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                    expected.push("'"+this.terminals_[p]+"'");
	                }
	                var errStr = '';
	                if (this.lexer.showPosition) {
	                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
	                } else {
	                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
	                                  (symbol == 1 /*EOF*/ ? "end of input" :
	                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
	                }
	                this.parseError(errStr,
	                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
	            }

	            // just recovered from another error
	            if (recovering == 3) {
	                if (symbol == EOF) {
	                    throw new Error(errStr || 'Parsing halted.');
	                }

	                // discard current lookahead and grab another
	                yyleng = this.lexer.yyleng;
	                yytext = this.lexer.yytext;
	                yylineno = this.lexer.yylineno;
	                yyloc = this.lexer.yylloc;
	                symbol = lex();
	            }

	            // try to recover from error
	            while (1) {
	                // check for error recovery rule in this state
	                if ((TERROR.toString()) in table[state]) {
	                    break;
	                }
	                if (state == 0) {
	                    throw new Error(errStr || 'Parsing halted.');
	                }
	                popStack(1);
	                state = stack[stack.length-1];
	            }

	            preErrorSymbol = symbol; // save the lookahead token
	            symbol = TERROR;         // insert generic error symbol as new lookahead
	            state = stack[stack.length-1];
	            action = table[state] && table[state][TERROR];
	            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
	        }

	        // this shouldn't happen, unless resolve defaults are off
	        if (action[0] instanceof Array && action.length > 1) {
	            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
	        }

	        switch (action[0]) {

	            case 1: // shift
	                //this.shiftCount++;

	                stack.push(symbol);
	                vstack.push(this.lexer.yytext);
	                lstack.push(this.lexer.yylloc);
	                stack.push(action[1]); // push state
	                symbol = null;
	                if (!preErrorSymbol) { // normal execution/no error
	                    yyleng = this.lexer.yyleng;
	                    yytext = this.lexer.yytext;
	                    yylineno = this.lexer.yylineno;
	                    yyloc = this.lexer.yylloc;
	                    if (recovering > 0)
	                        recovering--;
	                } else { // error just occurred, resume old lookahead f/ before error
	                    symbol = preErrorSymbol;
	                    preErrorSymbol = null;
	                }
	                break;

	            case 2: // reduce
	                //this.reductionCount++;

	                len = this.productions_[action[1]][1];

	                // perform semantic action
	                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
	                // default location, uses first token for firsts, last for lasts
	                yyval._$ = {
	                    first_line: lstack[lstack.length-(len||1)].first_line,
	                    last_line: lstack[lstack.length-1].last_line,
	                    first_column: lstack[lstack.length-(len||1)].first_column,
	                    last_column: lstack[lstack.length-1].last_column
	                };
	                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

	                if (typeof r !== 'undefined') {
	                    return r;
	                }

	                // pop off stack
	                if (len) {
	                    stack = stack.slice(0,-1*len*2);
	                    vstack = vstack.slice(0, -1*len);
	                    lstack = lstack.slice(0, -1*len);
	                }

	                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
	                vstack.push(yyval.$);
	                lstack.push(yyval._$);
	                // goto new state = table[STATE][NONTERMINAL]
	                newState = table[stack[stack.length-2]][stack[stack.length-1]];
	                stack.push(newState);
	                break;

	            case 3: // accept
	                return true;
	        }

	    }

	    return true;
	}};/* Jison generated lexer */
	var lexer = (function(){

	var lexer = ({EOF:1,
	parseError:function parseError(str, hash) {
	        if (this.yy.parseError) {
	            this.yy.parseError(str, hash);
	        } else {
	            throw new Error(str);
	        }
	    },
	setInput:function (input) {
	        this._input = input;
	        this._more = this._less = this.done = false;
	        this.yylineno = this.yyleng = 0;
	        this.yytext = this.matched = this.match = '';
	        this.conditionStack = ['INITIAL'];
	        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
	        return this;
	    },
	input:function () {
	        var ch = this._input[0];
	        this.yytext+=ch;
	        this.yyleng++;
	        this.match+=ch;
	        this.matched+=ch;
	        var lines = ch.match(/\n/);
	        if (lines) this.yylineno++;
	        this._input = this._input.slice(1);
	        return ch;
	    },
	unput:function (ch) {
	        this._input = ch + this._input;
	        return this;
	    },
	more:function () {
	        this._more = true;
	        return this;
	    },
	pastInput:function () {
	        var past = this.matched.substr(0, this.matched.length - this.match.length);
	        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
	    },
	upcomingInput:function () {
	        var next = this.match;
	        if (next.length < 20) {
	            next += this._input.substr(0, 20-next.length);
	        }
	        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
	    },
	showPosition:function () {
	        var pre = this.pastInput();
	        var c = new Array(pre.length + 1).join("-");
	        return pre + this.upcomingInput() + "\n" + c+"^";
	    },
	next:function () {
	        if (this.done) {
	            return this.EOF;
	        }
	        if (!this._input) this.done = true;

	        var token,
	            match,
	            col,
	            lines;
	        if (!this._more) {
	            this.yytext = '';
	            this.match = '';
	        }
	        var rules = this._currentRules();
	        for (var i=0;i < rules.length; i++) {
	            match = this._input.match(this.rules[rules[i]]);
	            if (match) {
	                lines = match[0].match(/\n.*/g);
	                if (lines) this.yylineno += lines.length;
	                this.yylloc = {first_line: this.yylloc.last_line,
	                               last_line: this.yylineno+1,
	                               first_column: this.yylloc.last_column,
	                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
	                this.yytext += match[0];
	                this.match += match[0];
	                this.matches = match;
	                this.yyleng = this.yytext.length;
	                this._more = false;
	                this._input = this._input.slice(match[0].length);
	                this.matched += match[0];
	                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
	                if (token) return token;
	                else return;
	            }
	        }
	        if (this._input === "") {
	            return this.EOF;
	        } else {
	            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
	                    {text: "", token: null, line: this.yylineno});
	        }
	    },
	lex:function lex() {
	        var r = this.next();
	        if (typeof r !== 'undefined') {
	            return r;
	        } else {
	            return this.lex();
	        }
	    },
	begin:function begin(condition) {
	        this.conditionStack.push(condition);
	    },
	popState:function popState() {
	        return this.conditionStack.pop();
	    },
	_currentRules:function _currentRules() {
	        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
	    },
	topState:function () {
	        return this.conditionStack[this.conditionStack.length-2];
	    },
	pushState:function begin(condition) {
	        this.begin(condition);
	    }});
	lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

	var YYSTATE=YY_START;
	switch($avoiding_name_collisions) {
	case 0:/* skip whitespace */
	break;
	case 1:return 20
	break;
	case 2:return 19
	break;
	case 3:return 8
	break;
	case 4:return 9
	break;
	case 5:return 6
	break;
	case 6:return 7
	break;
	case 7:return 11
	break;
	case 8:return 13
	break;
	case 9:return 10
	break;
	case 10:return 12
	break;
	case 11:return 14
	break;
	case 12:return 15
	break;
	case 13:return 16
	break;
	case 14:return 17
	break;
	case 15:return 18
	break;
	case 16:return 5
	break;
	case 17:return 'INVALID'
	break;
	}
	};
	lexer.rules = [/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./];
	lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"inclusive":true}};return lexer;})()
	parser.lexer = lexer;
	return parser;
	})();
	// End parser

	  // Handle node, amd, and global systems
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = Jed;
	    }
	    exports.Jed = Jed;
	  }
	  else {
	    if (typeof define === 'function' && define.amd) {
	      define(function() {
	        return Jed;
	      });
	    }
	    // Leak a global regardless of module system
	    root['Jed'] = Jed;
	  }

	})(this);


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./nl.po": 270
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

	module.exports = {"Credits":["Credits"],"This project is made possible with the following tools":["Dit project is mede mogelijk gemaakt door de volgende hulpmiddelen"],"Logging you out...":["Je wordt uitgelogt"],"Authenticate":["Aanmelden"],"Username":["Gebruikersnaam"],"Password":["Wachtwoord"],"Login":["Inloggen"],"Logged out":["Uitgelogt"],"Login failed":["Login niet gelukt"],"This year":["Dit jaar"],"Last year":["Afgelopen jaar"],"This month":["Deze maand"],"Last month":["Afgelopen maand"],"This week":["Deze week"],"Last week":["Vorige week"],"Week:":["Week:"],"Today":["Vandaag"],"Yesterday":["Gisteren"],"Last":["Afgelopen"],"Unknown":["Onbekend"],"Year":["Jaar"],"Month":["Maand"],"Week":["Week"],"Day":["Dag"],"Created by":["Gemaakt door"],"Fetching...":["Ophalen..."],"Not logged in":["Niet ingelogt"],"Energy Dashboard":["Energie Dashboard"],"Logout":["Uitloggen"],"Dismiss":["Negeren"],"":{"domain":"messages","plural_forms":"nplurals=2; plural=(n != 1);","lang":"nl"}};

/***/ },

/***/ 271:
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

/***/ 272:
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

/***/ 376:
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

/***/ 377:
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

	var _reactBootstrap = __webpack_require__(378);

	var _reactRouter = __webpack_require__(205);

	var _Header = __webpack_require__(641);

	var _Header2 = _interopRequireDefault(_Header);

	var _Notifier = __webpack_require__(642);

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

/***/ 641:
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

	var _reactBootstrap = __webpack_require__(378);

	var _reactRouter = __webpack_require__(205);

	var _i18n = __webpack_require__(267);

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
	                signedInLine = (0, _i18n.t)('Signed in as %s %s', user.firstName, user.lastName);
	            } else {
	                signedInLine = (0, _i18n.t)('Signed in as %s', user.username);
	            }
	        } else {
	            signedInLine = (0, _i18n.t)('Not logged in');
	        }

	        return _react2['default'].createElement(_reactBootstrap.Navbar, null, _react2['default'].createElement(_reactBootstrap.Navbar.Header, null, _react2['default'].createElement(_reactBootstrap.Navbar.Brand, null, _react2['default'].createElement(_reactRouter.Link, { to: '/' }, _react2['default'].createElement('img', { alt: (0, _i18n.t)('Energy Dashboard'), title: (0, _i18n.t)('Energy Dashboard'), src: 'static/image/logo.png' }))), _react2['default'].createElement(_reactBootstrap.Navbar.Toggle, null)), _react2['default'].createElement(_reactBootstrap.Navbar.Collapse, null, _react2['default'].createElement(_reactBootstrap.Nav, { pullRight: true }, _react2['default'].createElement(_reactBootstrap.Navbar.Text, null, signedInLine, '(', _react2['default'].createElement(_reactRouter.Link, { to: auth.loggedIn ? '/logout' : '/login' }, auth.loggedIn ? (0, _i18n.t)('Logout') : (0, _i18n.t)('Login')), ')'))));
	    }
	});

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(643);

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

/***/ 650:
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

	var _reactBootstrap = __webpack_require__(378);

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

/***/ 651:
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

	var _reactBootstrap = __webpack_require__(378);

	var _ChartWrapper = __webpack_require__(652);

	var _ChartWrapper2 = _interopRequireDefault(_ChartWrapper);

	var _PowerMeterSelect = __webpack_require__(657);

	var _PowerMeterSelect2 = _interopRequireDefault(_PowerMeterSelect);

	var _ReadingsViewPresets = __webpack_require__(658);

	var _ReadingsViewPresets2 = _interopRequireDefault(_ReadingsViewPresets);

	var _mixinsLoginRequired = __webpack_require__(659);

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

/***/ 652:
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

	var _FlotChart = __webpack_require__(653);

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

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(204);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment = __webpack_require__(273);

	var _moment2 = _interopRequireDefault(_moment);

	// we need flot and the various plugins
	__webpack_require__(654);
	__webpack_require__(655);
	__webpack_require__(656);

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
	                color: '#666666'
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

/***/ 657:
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

	var _reactBootstrap = __webpack_require__(378);

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

/***/ 658:
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

	var _reactBootstrap = __webpack_require__(378);

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

/***/ 659:
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

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(378);

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
	        return _react2['default'].createElement(_reactBootstrap.Grid, { fluid: false }, _react2['default'].createElement(_reactBootstrap.Row, null, _react2['default'].createElement(_reactBootstrap.Col, { xsOffset: 3, xs: 6, mdOffset: 3, md: 6 }, _react2['default'].createElement(_reactBootstrap.Panel, null, _react2['default'].createElement('h4', null, (0, _i18n.t)('Authenticate')), _react2['default'].createElement(_reactBootstrap.Form, { horizontal: true, ref: 'loginForm', onSubmit: this.handleSubmit }, _react2['default'].createElement(_reactBootstrap.FormGroup, { controlId: 'formHorizontalEmail' }, _react2['default'].createElement(_reactBootstrap.Col, { sm: 12 }, _react2['default'].createElement(_reactBootstrap.FormControl, { type: 'text', ref: 'username', placeholder: (0, _i18n.t)('Username') }))), _react2['default'].createElement(_reactBootstrap.FormGroup, { controlId: 'formHorizontalPassword' }, _react2['default'].createElement(_reactBootstrap.Col, { sm: 12 }, _react2['default'].createElement(_reactBootstrap.FormControl, { type: 'password', ref: 'password', placeholder: (0, _i18n.t)('Password') }))), _react2['default'].createElement(_reactBootstrap.FormGroup, null, _react2['default'].createElement(_reactBootstrap.Col, { sm: 12 }, _react2['default'].createElement(_reactBootstrap.Button, { type: 'submit' }, (0, _i18n.t)('Login')))))))));
	    }
	});

	exports['default'] = Login;
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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(378);

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

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _redux = __webpack_require__(180);

	var _reduxThunk = __webpack_require__(663);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reactRouter = __webpack_require__(205);

	var _reactRouterRedux = __webpack_require__(664);

	// import the root reducer

	var _reducersIndex = __webpack_require__(669);

	var _reducersIndex2 = _interopRequireDefault(_reducersIndex);

	var _actionsUser = __webpack_require__(266);

	var store = (0, _redux.createStore)(_reducersIndex2['default'], (0, _redux.applyMiddleware)(_reduxThunk2['default']));

	// Load user on startup
	store.dispatch((0, _actionsUser.fetchUser)());

	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	exports.history = history;
	exports['default'] = store;

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _redux = __webpack_require__(180);

	var _reactRouterRedux = __webpack_require__(664);

	// Import other reducers

	var _api = __webpack_require__(670);

	var _api2 = _interopRequireDefault(_api);

	var _auth = __webpack_require__(671);

	var _auth2 = _interopRequireDefault(_auth);

	var _notification = __webpack_require__(672);

	var _notification2 = _interopRequireDefault(_notification);

	var _powerMeter = __webpack_require__(673);

	var _powerMeter2 = _interopRequireDefault(_powerMeter);

	var _report = __webpack_require__(674);

	var _report2 = _interopRequireDefault(_report);

	var _reportPeriod = __webpack_require__(675);

	var _reportPeriod2 = _interopRequireDefault(_reportPeriod);

	var _user = __webpack_require__(676);

	var _user2 = _interopRequireDefault(_user);

	// Map the reducers to the appropriate part of the state
	var rootReducer = (0, _redux.combineReducers)({
	    api: _api2['default'],
	    auth: _auth2['default'],
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

/***/ 670:
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
	            if (action.code != 403) {
	                state.errors.push(action.error);
	            }
	            return state;

	        default:
	            return state;
	    }
	}

	module.exports = exports['default'];

/***/ },

/***/ 671:
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

/***/ 672:
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

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = powerMeters;

	var _actionsPowerMeter = __webpack_require__(271);

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

/***/ 674:
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

	var _store = __webpack_require__(662);

	var _store2 = _interopRequireDefault(_store);

	var _actionsReport = __webpack_require__(272);

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

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = reportPeriod;

	var _actionsReportPeriod = __webpack_require__(376);

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

/***/ 676:
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