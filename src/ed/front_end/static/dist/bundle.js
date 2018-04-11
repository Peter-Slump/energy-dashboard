webpackJsonp([0],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=n(a),i=r(31),u=r(170);n(u);r(179);var l=r(181),s=n(l),d=r(690),c=n(d),f=r(691),p=n(f),h=r(700),m=n(h),E=r(701),g=n(E),_=r(226),y=r(202),v=r(702),b=n(v),O=r(225),w=n(O);w.default.ajaxSetup({contentType:"application/json; charset=utf-8",dataType:"json"});var C=o.default.createElement(y.Provider,{store:b.default},o.default.createElement(_.Router,{history:v.history},o.default.createElement(_.Route,{path:"/",component:s.default},o.default.createElement(_.IndexRoute,{component:p.default}),o.default.createElement(_.Route,{path:"/login",component:m.default}),o.default.createElement(_.Route,{path:"/logout",component:g.default}),o.default.createElement(_.Route,{path:"/credits",component:c.default}))));(0,i.render)(C,document.getElementById("root"))},179:function(e,t,r){var n=r(180);"string"==typeof n&&(n=[[e.id,n,""]]);r(178)(n,{});n.locals&&(e.exports=n.locals)},180:function(e,t,r){t=e.exports=r(172)(),t.push([e.id,".checkbox input[type=checkbox]{position:absolute}.row-bottom-spacing{margin-bottom:20px}.language-select ul.dropdown-menu{min-width:auto}.navbar-brand img{width:25px}.navbar-text{margin-left:1em}.alert-notifier-container{position:fixed;top:20px;right:20px;width:250px;padding:5px;z-index:9999}.alert-notifier-container .alert-enter{opacity:.01;transition:opacity .25s ease-in}.alert-notifier-container .alert-enter.alert-enter-active{opacity:1}.alert-notifier-container .alert-leave{opacity:1;transition:opacity .25s ease-in}.alert-notifier-container .alert-leave.alert-leave-active{opacity:.01}footer{margin:3em 0}footer li{float:left;margin-bottom:1.5em;margin-right:1.5em}footer p{clear:left;margin-bottom:0}",""])},181:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return{api:e.api,auth:e.auth,language:e.language,notification:e.notification,powerMeter:e.powerMeter,report:e.report,reportPeriod:e.reportPeriod,user:e.user}}function i(e){return{apiActions:(0,u.bindActionCreators)(d,e),authActions:(0,u.bindActionCreators)(f,e),languageActions:(0,u.bindActionCreators)(h,e),notificationActions:(0,u.bindActionCreators)(E,e),powerMeterActions:(0,u.bindActionCreators)(_,e),reportActions:(0,u.bindActionCreators)(v,e),reportPeriodActions:(0,u.bindActionCreators)(O,e),userActions:(0,u.bindActionCreators)(C,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(182),l=r(202),s=r(223),d=a(s),c=r(289),f=a(c),p=r(296),h=a(p),m=r(288),E=a(m),g=r(422),_=a(g),y=r(423),v=a(y),b=r(424),O=a(b),w=r(290),C=a(w),T=r(425),R=n(T),M=(0,l.connect)(o,i)(R.default);t.default=M,e.exports=t.default},223:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return{type:h,path:e,method:t,data:r}}function o(e){return{type:m,data:e}}function i(e,t,r){return{type:E,code:e.status,error:r,status:t}}function u(e){var t=arguments.length<=1||void 0===arguments[1]?"GET":arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2];return function(n){return n(a(e,t,r)),new Promise(function(a,u){c.default.ajax({url:e,method:t,data:r?JSON.stringify(r):null,beforeSend:function(e,t){e.setRequestHeader("X-CSRFToken",s.default.get("csrftoken"))},statusCode:{403:function(){f.browserHistory.push("/login")}}}).done(function(e){n(o(e)),a(e)}).fail(function(e,t,r){[400,403].indexOf(e.status)==-1&&n((0,p.notificationAdd)(r,"warning","API Error")),n(i(e,t,r)),u(e,t,r)})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.apiRequest=a,t.apiRequestSuccess=o,t.apiRequestFailed=i,t.callApi=u;var l=r(224),s=n(l),d=r(225),c=n(d),f=r(226),p=r(288),h="API_REQUEST";t.API_REQUEST=h;var m="API_REQUEST_SUCCESS";t.API_REQUEST_SUCCESS=m;var E="API_REQUEST_FAILED";t.API_REQUEST_FAILED=E},288:function(e,t){"use strict";function r(e){var t=arguments.length<=1||void 0===arguments[1]?"info":arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2],a=arguments.length<=3||void 0===arguments[3]?1e4:arguments[3];return{type:n,message:e,level:t,headline:r,timeout:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.notificationAdd=r;var n="NOTIFICATION_ADD";t.NOTIFICATION_ADD=n},289:function(e,t,r){"use strict";function n(){return{type:m}}function a(e){return{type:E,key:e}}function o(e){return{type:g,error:e}}function i(){return{type:_}}function u(){return{type:y}}function l(){return function(e){return e(i()),e((0,d.callApi)("/rest-auth/logout/","POST")).then(function(t){e(u()),e((0,f.notificationAdd)(t.success,"info",(0,h.t)("Logged out")))})}}function s(e,t){return function(r){return r(n()),r((0,d.callApi)("/rest-auth/login/","POST",{username:e,password:t})).then(function(e){r(a(e.key)),r((0,c.fetchUser)()),p.browserHistory.push("/")},function(e,t,n){r(o(n)),400==e.status&&r((0,f.notificationAdd)(e.responseJSON.non_field_errors,"error",(0,h.t)("Login failed")))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.requestLogin=n,t.loggedIn=a,t.loginFailed=o,t.requestLogout=i,t.loggedOut=u,t.logout=l,t.login=s;var d=r(223),c=r(290),f=r(288),p=r(226),h=r(291),m="AUTH_REQUEST_LOGIN";t.AUTH_REQUEST_LOGIN=m;var E="AUTH_LOGGED_IN";t.AUTH_LOGGED_IN=E;var g="AUTH_LOGIN_FAILED";t.AUTH_LOGIN_FAILED=g;var _="AUTH_REQUEST_LOGOUT";t.AUTH_REQUEST_LOGOUT=_;var y="AUTH_LOGGED_OUT";t.AUTH_LOGGED_OUT=y},290:function(e,t,r){"use strict";function n(){return{type:u}}function a(e,t,r,n){return{type:l,username:e,firstName:t,lastName:r,email:n}}function o(){return function(e){return e(n()),e((0,i.callApi)("/rest-auth/user/")).then(function(t){return e(a(t.username,t.first_name,t.last_name,t.email))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.requestUser=n,t.receiveUser=a,t.fetchUser=o;var i=r(223),u="REQUEST_USER";t.REQUEST_USER=u;var l="RECEIVE_USER";t.RECEIVE_USER=l},291:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return r(293)("./"+e+".po")}function o(e){var t=a(e);d=new s.default({domain:"ed",missing_key_callback:function(e){},locale_data:{ed:t}})}function i(e){return d.translate(e).fetch()}function u(e,t,r){return d.translate(e).ifPlural(r,t).fetch(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.setLocale=o;var l=r(292),s=n(l),d=null;o("en");var c=i;t.t=c;var f=u;t.tn=f;var p=s.default.sprintf;t.sprintf=p},293:function(e,t,r){function n(e){return r(a(e))}function a(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./en.po":294,"./nl.po":295};n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=293},294:function(e,t){e.exports={Credits:["Credits"],"This project is made possible with the following tools":["This project is made possible with the following tools"],"Logging you out...":["Logging you out..."],Authenticate:["Authenticate"],Username:["Username"],Password:["Password"],Login:["Login"],"Logged out":["Logged out"],"Login failed":["Login failed"],"This year":["This year"],"Last year":["Last year"],"This month":["This month"],"Last month":["Last month"],"This week":["This week"],"Last week":["Last week"],"Week:":["Week:"],Today:["Today"],Yesterday:["Yesterday"],Last:["Last"],Unknown:["Unknown"],Year:["Year"],Month:["Month"],Week:["Week"],Day:["Day"],"Created by":["Created by"],"Fetching...":["Fetching..."],"Not logged in":["Not logged in"],"Energy Dashboard":["Energy Dashboard"],Logout:["Logout"],Dismiss:["Dismiss"],"Signed in as %s %s":["Signed in as %s %s"],"Signed in as %s":["Signed in as %s"],Dutch:["Dutch"],English:["English"],"":{domain:"messages",plural_forms:"nplurals=2; plural=(n != 1);",lang:"en"}}},295:function(e,t){e.exports={Credits:["Credits"],"This project is made possible with the following tools":["Dit project is mede mogelijk gemaakt door de volgende hulpmiddelen"],"Logging you out...":["Je wordt uitgelogt"],Authenticate:["Aanmelden"],Username:["Gebruikersnaam"],Password:["Wachtwoord"],Login:["Inloggen"],"Logged out":["Uitgelogt"],"Login failed":["Login niet gelukt"],"This year":["Dit jaar"],"Last year":["Afgelopen jaar"],"This month":["Deze maand"],"Last month":["Afgelopen maand"],"This week":["Deze week"],"Last week":["Vorige week"],"Week:":["Week:"],Today:["Vandaag"],Yesterday:["Gisteren"],Last:["Afgelopen"],Unknown:["Onbekend"],Year:["Jaar"],Month:["Maand"],Week:["Week"],Day:["Dag"],"Created by":["Gemaakt door"],"Fetching...":["Ophalen..."],"Not logged in":["Niet ingelogt"],"Energy Dashboard":["Energie Dashboard"],Logout:["Uitloggen"],Dismiss:["Negeren"],"Signed in as %s %s":["Ingelogd als %s %s"],"Signed in as %s":["Ingelogd als %s"],Dutch:["Nederlands"],English:["Engels"],kWh:["kWh"],Watt:["Watt"]," W":["W"]," kWh":[" kWh"]," m³":[" m³"],"Current usage:":["Huidig verbruik:"],W:["W"],"":{domain:"messages",plural_forms:"nplurals=2; plural=(n != 1);",lang:"nl"}}},296:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:c,code:e}}function o(e){return function(t){return new Promise(function(r,n){var o="GB"==e?"EN":e;(0,i.setLocale)(o.toLowerCase()),l.default.locale(o.toLowerCase()),d.default.set("lang",e),t(a(e)),r(e)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.changed=a,t.changeLanguage=o;var i=r(291),u=r(297),l=n(u),s=r(224),d=n(s),c="LANGUAGE_CHANGED";t.LANGUAGE_CHANGED=c},422:function(e,t,r){"use strict";function n(){return{type:s}}function a(e){return{type:d,powerMeters:e}}function o(e){return{type:c,error:e}}function i(e,t){return{type:f,id:e,isSelected:t}}function u(){return function(e,t){return e(n()),e((0,l.callApi)("/api/power-meter/")).then(function(t){return e(a(t))},function(t,r,n){return e(o(n))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPowerMeters=n,t.fetchPowerMetersSuccess=a,t.fetchPowerMetersFailed=o,t.changeSelectedPowerMeter=i,t.receivePowerMeters=u;var l=r(223),s="FETCH_POWER_METERS";t.FETCH_POWER_METERS=s;var d="FETCH_POWER_METERS_SUCCESS";t.FETCH_POWER_METERS_SUCCESS=d;var c="FETCH_POWER_METERS_FAILED";t.FETCH_POWER_METERS_FAILED=c;var f="CHANGE_SELECTED_POWER_METER";t.CHANGE_SELECTED_POWER_METER=f},423:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:h,powerMeterId:e}}function o(e){return{type:m,powerMeterId:e}}function i(e,t,r,n,a){return{type:E,powerMeter:e,report:t,start:r,end:n,stepSize:a}}function u(e,t){return{type:g,powerMeterId:e,error:t}}function l(){return function(e,t){var r=t(),n=r.reportPeriod.offset,a=null,o=(0,p.default)().set({hour:0,minute:0,second:0,millisecond:0}),i=(0,p.default)().set({hour:0,minute:0,second:0,millisecond:0});switch(r.reportPeriod.period){case"day":o.add(n,"days"),i.add(n+1,"days"),a="minute";break;case"week":o.day(0),i.day(0),o.add(n,"weeks"),i.add(n+1,"weeks"),a="day";break;case"month":o.date(1),i.date(1),o.add(n,"months"),i.add(n+1,"months"),a="day";break;case"year":o.set({date:1,month:0}),i.set({date:1,month:0}),o.add(n,"years"),i.add(n+1,"years"),a="month"}Promise.all(Object.keys(r.powerMeter.powerMetersById).map(function(t){if(s(r,t,a,o,i)){var n=r.powerMeter.powerMetersById[t];return e(d(n,a,o,i))}return Promise.resolve()}))}}function s(e,t,r,n,a){var o=e.powerMeter.powerMetersById[t];if(!o||!o.isSelected)return!1;var i=e.report[t];return!i||(i.stepSize!=r||i.start!=n||i.end!=a)}function d(e,t,r,n){return function(a){return a(o(e.data.id)),a((0,c.callApi)("/api/reading-report/"+e.data.id+"/"+t+"/"+r.toISOString()+"/"+n.toISOString()+"/")).then(function(o){return a(i(e,o,r,n,t))},function(t,r,n){return a(u(e.id,n))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.invalidateReport=a,t.fetchReport=o,t.fetchReportSuccess=i,t.fetchReportFailed=u,t.receiveReportsIfNeeded=l;var c=r(223),f=r(297),p=n(f),h="INVALIDATE_REPORT";t.INVALIDATE_REPORT=h;var m="FETCH_REPORT";t.FETCH_REPORT=m;var E="FETCH_REPORT_SUCCESS";t.FETCH_REPORT_SUCCESS=E;var g="FETCH_REPORT_FAILED";t.FETCH_REPORT_FAILED=g},424:function(e,t){"use strict";function r(e){return{type:a,period:e}}function n(e){return{type:o,delta:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeReportPeriod=r,t.changeReportPeriodOffset=n;var a="CHANGE_REPORT_PERIOD";t.CHANGE_REPORT_PERIOD=a;var o="CHANGE_REPORT_PERIOD_OFFSET";t.CHANGE_REPORT_PERIOD_OFFSET=o},425:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=r(226),l=r(676),s=n(l),d=r(681),c=n(d),f=r(291),p=o.default.createClass({displayName:"Main",render:function(){var e=Object.assign({},this.props);return delete e.key,delete e.ref,o.default.createElement("div",null,o.default.createElement(s.default,this.props),o.default.cloneElement(this.props.children,e),o.default.createElement("footer",null,o.default.createElement(i.Grid,{fluid:!1},o.default.createElement(i.Row,null,o.default.createElement(i.Col,{md:12},o.default.createElement("ul",{className:"list-unstyled"},o.default.createElement("li",null,(0,f.t)("Created by"),": ",o.default.createElement("a",{href:"http://peter-slump.nl/"},"Peter Slump")),o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/credits"},(0,f.t)("Credits"))),o.default.createElement("li",null,o.default.createElement("a",{href:"https://github.com/Peter-Slump/energy-dashboard"},"Github"))))))),o.default.createElement(c.default,{alerts:e.notification||[]}))}});t.default=p,e.exports=t.default},676:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=r(226),l=r(677),s=r(291),d=r(680),c=n(d),f=o.default.createClass({displayName:"Header",render:function(){var e=this.props,t=e.auth,r=e.user,n="";return n=t.loggedIn?r.isFetching?(0,s.t)("Fetching..."):r.firstName||r.lastName?(0,s.sprintf)((0,s.t)("Signed in as %s %s"),r.firstName,r.lastName):(0,s.sprintf)((0,s.t)("Signed in as %s"),r.username):(0,s.t)("Not logged in"),o.default.createElement(i.Navbar,null,o.default.createElement(i.Navbar.Header,null,o.default.createElement(i.Navbar.Brand,null,o.default.createElement(u.Link,{to:"/"},o.default.createElement("img",{alt:(0,s.t)("Energy Dashboard"),title:(0,s.t)("Energy Dashboard"),src:"static/image/logo.png"}))),o.default.createElement(i.Navbar.Toggle,null)),o.default.createElement(i.Navbar.Collapse,null,o.default.createElement(i.Navbar.Text,{pullRight:!0},n),o.default.createElement(i.Nav,{pullRight:!0},o.default.createElement(l.LinkContainer,{to:t.loggedIn?"/logout":"/login"},o.default.createElement(i.NavItem,null,t.loggedIn?(0,s.t)("Logout"):(0,s.t)("Login"))),o.default.createElement(c.default,this.props))))}});t.default=f,e.exports=t.default},677:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.LinkContainer=t.IndexLinkContainer=void 0;var a=r(678),o=n(a),i=r(679),u=n(i);t.IndexLinkContainer=o.default,t.LinkContainer=u.default},678:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(1),s=n(l),d=r(679),c=n(d),f=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement(c.default,u({},this.props,{onlyActiveOnIndex:!0}))},t}(s.default.Component);t.default=f,e.exports=t.default},679:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return 0===e.button}function s(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d(e,t,r,n){return t||r||n?{pathname:e,query:t,hash:r,state:n}:e}function c(e,t){return"function"==typeof e?e(t.location):e}t.__esModule=!0;var f=r(204),p=n(f),h=r(1),m=n(h),E={onlyActiveOnIndex:p.default.bool.isRequired,to:p.default.oneOfType([p.default.string,p.default.object,p.default.func]).isRequired,query:p.default.string,hash:p.default.string,state:p.default.object,action:p.default.oneOf(["push","replace"]).isRequired,onClick:p.default.func,active:p.default.bool,target:p.default.string,children:p.default.node.isRequired},g={router:p.default.object},_={onlyActiveOnIndex:!1,action:"push"},y=function(e){function t(){var r,n,a;o(this,t);for(var u=arguments.length,f=Array(u),p=0;p<u;p++)f[p]=arguments[p];return r=n=i(this,e.call.apply(e,[this].concat(f))),n.onClick=function(e){var t=n.props,r=t.to,a=t.query,o=t.hash,i=t.state,u=t.children,f=t.onClick,p=t.target,h=t.action,m=n.context.router,E=c(r,m);u.props.onClick&&u.props.onClick(e),f&&f(e),p||e.defaultPrevented||s(e)||!l(e)||(e.preventDefault(),m[h](d(E,a,o,i)))},a=r,i(n,a)}return u(t,e),t.prototype.render=function(){var e=this.context.router,t=this.props,r=t.onlyActiveOnIndex,n=t.to,o=t.children,i=a(t,["onlyActiveOnIndex","to","children"]),u=c(n,e);return i.onClick=this.onClick,e&&(i.href=e.createHref(u),null==i.active&&(i.active=e.isActive(u,r))),m.default.cloneElement(m.default.Children.only(o),i)},t}(m.default.Component);y.propTypes=E,y.contextTypes=g,y.defaultProps=_,t.default=y,e.exports=t.default},680:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=(r(291),o.default.createClass({displayName:"LanguageSelect",setLanguage:function(e){var t=this.props.languageActions;t.changeLanguage(e)},render:function(){var e=this,t=this.props.language,r=t.availableLanguages;return o.default.createElement(i.Dropdown,{componentClass:"li",id:"language-select",className:"language-select"},o.default.createElement(i.Dropdown.Toggle,{useAnchor:!0},o.default.createElement("img",{src:"static/image/flags/24x24/"+t.code+".png"})),o.default.createElement(i.Dropdown.Menu,null,Object.keys(r).map(function(t){return o.default.createElement(i.MenuItem,{key:t,onClick:e.setLanguage.bind(null,t)},o.default.createElement("img",{src:"static/image/flags/24x24/"+t+".png"}))})))}}));t.default=u,e.exports=t.default},681:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=n(a),i=r(682),u=n(i),l=r(291),s=o.default.createClass({displayName:"AlertsNotifier",propTypes:{alerts:o.default.PropTypes.array.isRequired,onDismiss:o.default.PropTypes.func},getInitialState:function(){return{dismissedAlerts:[]}},dismiss:function(e){if(this.props.onDismiss)this.props.onDismiss(e);else{var t=this.state.dismissedAlerts.slice();t.push(e),this.setState({dismissedAlerts:t})}},render:function(){for(var e=[],t=500,r=300,n=0;n<this.props.alerts.length;n++)if(this.state.dismissedAlerts.indexOf(this.props.alerts[n])<0){var a=this.props.alerts[n];e.push(a),a.timeout&&setTimeout(this.dismiss.bind(this,a),a.timeout+t+r)}return n=-1,o.default.createElement("div",{className:"alert-notifier-container"},o.default.createElement(u.default,{transitionName:"alert",transitionEnterTimeout:t,transitionLeaveTimeout:r},e.map(function(e){n++,["success","info","warning","danger"].indexOf(e.type)<0&&(e.type="info");var t="alert alert-dismissible alert-"+e.type,r=e.headline?o.default.createElement("strong",null,e.headline," ",o.default.createElement("br",null)):null;return o.default.createElement("div",{className:t,key:n},o.default.createElement("button",{type:"button",className:"close",title:(0,l.t)("Dismiss"),onClick:this.dismiss.bind(this,e)},"×"),r,e.message)}.bind(this))))}});e.exports=s},690:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=r(291),l=o.default.createClass({displayName:"Credits",render:function(){return o.default.createElement(i.Grid,{fluid:!1},o.default.createElement(i.Row,null,o.default.createElement(i.Col,{md:12},o.default.createElement(i.PageHeader,null,(0,u.t)("Credits")),o.default.createElement("p",null,(0,u.t)("This project is made possible with the following tools")),o.default.createElement("h4",null,"Back-end"),o.default.createElement("a",{href:"https://www.djangoproject.com/"},"Django project"),o.default.createElement("br",null),o.default.createElement("a",{href:"http://www.django-rest-framework.org/"},"Django Rest Framework"),o.default.createElement("h4",null,"Front-end"),o.default.createElement("a",{href:"https://facebook.github.io/react/"},"React"),o.default.createElement("br",null),o.default.createElement("a",{href:"https://react-bootstrap.github.io/"},"React Bootstrap"),o.default.createElement("br",null),o.default.createElement("a",{href:"http://redux.js.org"},"React Redux"),o.default.createElement("br",null),o.default.createElement("a",{href:"https://github.com/reactjs/react-router"},"React Router"),o.default.createElement("h4",null,"Styling"),o.default.createElement("a",{href:"https://getboostrap.com/"},"Twitter Bootstrap"),o.default.createElement("br",null),o.default.createElement("a",{href:"https://bootswatch.com/paper/"},"Bootswatch Paper theme"))))}});t.default=l,e.exports=t.default},691:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=r(692),l=n(u),s=r(697),d=n(s),c=r(698),f=n(c),p=r(699),h=n(p),m=o.default.createClass({displayName:"Dashboard",mixins:[h.default],componentDidMount:function(){var e=this;this.props.powerMeterActions.receivePowerMeters().then(function(){return e.props.reportActions.receiveReportsIfNeeded()})},render:function(){return o.default.createElement(i.Grid,{fluid:!1},o.default.createElement(i.Row,null,o.default.createElement(i.Col,{xs:12,md:12},o.default.createElement(i.Panel,null,o.default.createElement(f.default,this.props),o.default.createElement(i.Clearfix,null),o.default.createElement(l.default,this.props),o.default.createElement(d.default,this.props)))))}});t.default=m,e.exports=t.default},692:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(225),o=(n(a),r(1)),i=n(o),u=r(693),l=n(u),s=i.default.createClass({displayName:"ChartWrapper",render:function(){var e=this.props,t=e.report,r=e.powerMeter,n=[],a=void 0,o=new Date,u="hour";return Object.keys(t).map(function(e){var i=r.powerMetersById[e],l=t[e];if(i.isSelected&&!l.didInvalidate){var s=864e5;"minute"==l.stepSize?s=6e4:"hour"==l.stepSize?s=36e5:"day"==l.stepSize?s=864e5:"month"==l.stepSize?s=2592e6:"year"==l.stepSize&&(s=31536e6),n.push({plotId:l.uniqueId,data:l.fullReport,yaxis:"m3"==l.unit?2:1,color:i.color,shadowSize:0,label:i.data.name,unit:l.unit,bars:{show:"minute"!=l.stepSize,align:"left",barWidth:.6*s},lines:{show:"minute"==l.stepSize,zero:!1,lineWidth:2,fill:!0,steps:!1}}),a=l.start,o=l.end,u=l.stepSize}}),i.default.createElement(l.default,{style:{height:250},start:a,end:o,stepSize:u,className:"row-bottom-spacing",plotData:n})}});t.default=s,e.exports=t.default},693:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(31),u=n(i),l=r(225),s=n(l),d=r(297),c=n(d),f=r(291);r(694),r(695),r(696);var p=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},h=function(e,t){return function(t,r,n,a){var o=a.series,i=a.dataIndex,u=o.data[i][0],l=void 0,s=void 0,d='<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">';d+=m(u,o.xaxis.options.minTickSize[1]),d+='</h3></div><div class="panel-body">';for(var c=0;c<e.length;c++){switch(l=e[c].data.find(function(e){return e[0].valueOf()==u.valueOf()}),l=void 0===l?"-":p(l[1]),e[c].unit){case"m3":s="m³";break;case"w":s=(0,f.t)("Watt");break;case"kwh":s=(0,f.t)("kWh");break;default:s=""}d+='<strong style="color:'+e[c].color+'">',d+=e[c].label+":</strong> "+l,"-"!=l&&(d+=' <span class="text-muted">'+s+"</span>"),d+="<br>"}return d+="</div></div>"}},m=function(e,t){var r=(0,c.default)(e),n=void 0;switch(t){case"minute":case"hour":n="LLL";break;case"day":n="LL";break;case"month":n="MMMM YYYY";break;default:n="LTS"}return r.format(n)},E=o.default.createClass({displayName:"FlotChart",propTypes:{plotData:o.default.PropTypes.array,style:o.default.PropTypes.object},componentDidMount:function(){this.renderChart(),(0,s.default)(window).resize(this.renderChart)},componentDidUpdate:function(){this.renderChart()},shouldComponentUpdate:function(e,t){var r=this.props.plotData.map(function(e){return e.plotId}),n=e.plotData.map(function(e){return e.plotId});return r.sort().join()!=n.sort().join()},componentWillUnmount:function(){(0,s.default)(window).unbind("resize",this.renderChart)},renderChart:function(e){var t=this.props.plotData,r=this.props.stepSize,n={xaxis:{mode:"time",timezone:"browser",minTickSize:[1,this.props.stepSize],min:this.props.start,max:this.props.end,color:"#666666",monthNames:c.default.monthsShort("-MMM-")},yaxis:{min:0,minTickSize:.001,tickDecimals:3,color:"#222222"},yaxes:[{position:"left",tickFormatter:function(e,t){return"minute"==r?e.toFixed(0)+(0,f.t)(" W"):e.toFixed(t.tickDecimals)+(0,f.t)(" kWh")}},{position:"right",tickFormatter:function(e,t){return e.toFixed(t.tickDecimals)+(0,f.t)(" m³")}}],tooltip:!0,tooltipOpts:{content:h(t,this.props.stepSize),defaultTheme:!1},grid:{show:!0,hoverable:!0,backgroundColor:"#FFFFFF",borderColor:"#DDDDDD",borderWidth:1,color:"#666666",tickColor:"#DDDDDD"},hoverable:!1,legend:{noColumns:t.length,position:"nw"}},a=u.default.findDOMNode(this.refs.chartNode);s.default.plot(a,t,n)},render:function(){return o.default.createElement("figure",{className:this.props.className||"chart",style:this.props.style,ref:"chartNode"})}});t.default=E,e.exports=t.default},697:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=r(297),l=n(u),s=r(291),d=o.default.createClass({displayName:"PowerMeterSelect",handleChange:function(e){var t=this.props,r=t.powerMeterActions,n=t.reportActions;r.changeSelectedPowerMeter(e.target.value,e.target.checked),n.receiveReportsIfNeeded()},render:function(){function e(e){var t=(0,l.default)(e.current_value_datetime),r=e.name;return null!=e.current_value&&t>(0,l.default)().subtract(5,"minutes")&&(r+=" - ",r+=(0,s.t)("Current usage:")+" ",r+=1e3*e.current_value,r+=" "+(0,s.t)("W")+" (",r+=t.fromNow(),r+=")"),r}var t=this,r=this.props.powerMeter.powerMetersById;return o.default.createElement(i.Form,null,Object.keys(r).map(function(n){return o.default.createElement(i.Checkbox,{checked:r[n].isSelected,key:r[n].data.id,value:r[n].data.id,onChange:t.handleChange},e(r[n].data))}))}});t.default=d,e.exports=t.default},698:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(297),o=n(a),i=r(1),u=n(i),l=r(426),s=r(291),d=u.default.createClass({displayName:"ReadingsViewPresets",handleClick:function(e){var t=this.props,r=t.reportPeriodActions,n=t.reportActions;r.changeReportPeriod(e.target.value),n.receiveReportsIfNeeded()},handleOffsetClick:function(e){var t=this.props,r=t.reportPeriodActions,n=t.reportActions;r.changeReportPeriodOffset(parseInt(e.currentTarget.value)),n.receiveReportsIfNeeded()},render:function(){var e=this.props.reportPeriod,t=e.period,r=e.offset,n="",a=(0,o.default)();switch(t){case"year":switch(r){case 0:n=(0,s.t)("This year");break;case-1:n=(0,s.t)("Last year");break;default:a.add(r,"years"),n=a.format("YYYY")}break;case"month":switch(r){case 0:n=(0,s.t)("This month");break;case-1:n=(0,s.t)("Last month");break;default:a.add(r,"months"),n=a.format(r>-12?"MMMM":"MMM YYYY")}break;case"week":switch(r){case 0:n=(0,s.t)("This week");break;case-1:n=(0,s.t)("Last week");break;default:a.add(r,"weeks"),n=a.format(r>-52?"["+(0,s.t)("Week:")+"] w":"["+(0,s.t)("Week:")+"] w YYYY")}break;case"day":switch(r){case 0:n=(0,s.t)("Today");break;case-1:n=(0,s.t)("Yesterday");break;case-2:case-3:case-4:case-5:case-6:a.add(r,"days"),n=a.format("["+(0,s.t)("Last")+"] dddd");break;default:a.add(r,"days"),n=a.format(r>-365?"MMMM Do":"MMMM Do YYYY")}break;default:n=(0,s.t)("Unknown")}return u.default.createElement(l.Row,null,u.default.createElement(l.Col,{xs:12,md:4,className:"row-bottom-spacing"},u.default.createElement(l.ButtonGroup,null,u.default.createElement(l.Button,{active:"year"==e.period,value:"year",onClick:this.handleClick},(0,s.t)("Year")),u.default.createElement(l.Button,{active:"month"==e.period,value:"month",onClick:this.handleClick},(0,s.t)("Month")),u.default.createElement(l.Button,{active:"week"==e.period,value:"week",onClick:this.handleClick},(0,s.t)("Week")),u.default.createElement(l.Button,{active:"day"==e.period,value:"day",onClick:this.handleClick},(0,s.t)("Day")))),u.default.createElement(l.Col,{xs:12,md:4,className:"row-bottom-spacing"},u.default.createElement(l.ButtonGroup,null,u.default.createElement(l.Button,{value:-1,onClick:this.handleOffsetClick},u.default.createElement(l.Glyphicon,{glyph:"chevron-left"})),u.default.createElement(l.Button,{value:1,onClick:this.handleOffsetClick},u.default.createElement(l.Glyphicon,{glyph:"chevron-right"})),u.default.createElement(l.Button,{disabled:!0},n))))}});t.default=d,e.exports=t.default},699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(226),a={componentWillMount:function(){var e=this.props.auth;e.loggedIn===!1&&(console.log("Redirect",e),n.browserHistory.push("/login"))}};t.default=a,e.exports=t.default},700:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(31),u=n(i),l=r(426),s=r(291),d=o.default.createClass({displayName:"Login",handleSubmit:function(e){e.preventDefault();var t=this.refs,r=t.username,n=t.password,a=t.loginForm;this.props.authActions.login(u.default.findDOMNode(r).value,u.default.findDOMNode(n).value),u.default.findDOMNode(a).reset()},render:function(){return o.default.createElement(l.Grid,{fluid:!1},o.default.createElement(l.Row,null,o.default.createElement(l.Col,{xsOffset:3,xsOffset:0,xs:12,mdOffset:3,md:6},o.default.createElement(l.Panel,null,o.default.createElement("h4",null,(0,s.t)("Authenticate")),o.default.createElement(l.Form,{horizontal:!0,ref:"loginForm",onSubmit:this.handleSubmit},o.default.createElement(l.FormGroup,{controlId:"formHorizontalEmail"},o.default.createElement(l.Col,{sm:12},o.default.createElement(l.FormControl,{type:"text",ref:"username",placeholder:(0,s.t)("Username"),autoFocus:!0}))),o.default.createElement(l.FormGroup,{controlId:"formHorizontalPassword"},o.default.createElement(l.Col,{
sm:12},o.default.createElement(l.FormControl,{type:"password",ref:"password",placeholder:(0,s.t)("Password")}))),o.default.createElement(l.FormGroup,null,o.default.createElement(l.Col,{sm:12},o.default.createElement(l.Button,{type:"submit"},(0,s.t)("Login")))))))))}});t.default=d,e.exports=t.default},701:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),i=r(426),u=r(226),l=r(291),s=o.default.createClass({displayName:"Logout",componentDidMount:function(){this.props.authActions.logout().then(function(){return u.browserHistory.push("/login")})},render:function(){return o.default.createElement(i.Grid,{fluid:!1},o.default.createElement(i.Row,null,o.default.createElement(i.Col,{md:12},o.default.createElement("p",null,(0,l.t)("Logging you out...")))))}});t.default=s,e.exports=t.default},702:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(182),o=r(703),i=n(o),u=r(226),l=r(704),s=r(224),d=n(s),c=r(709),f=n(c),p=r(290),h=r(296),m=(0,a.createStore)(f.default,(0,a.applyMiddleware)(i.default));m.dispatch((0,p.fetchUser)()),m.dispatch((0,h.changeLanguage)(d.default.get("lang")||"GB"));var E=(0,l.syncHistoryWithStore)(u.browserHistory,m);t.history=E,t.default=m},709:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(182),o=r(704),i=r(710),u=n(i),l=r(711),s=n(l),d=r(712),c=n(d),f=r(713),p=n(f),h=r(714),m=n(h),E=r(715),g=n(E),_=r(716),y=n(_),v=r(717),b=n(v),O=(0,a.combineReducers)({api:u.default,auth:s.default,language:c.default,notification:p.default,powerMeter:m.default,report:g.default,reportPeriod:y.default,routing:o.routerReducer,user:b.default});t.default=O,e.exports=t.default},710:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e={currentRequests:0,errors:[],shownErrorIndex:0}),t.type){case a.API_REQUEST_SUCCESS:return Object.assign({},e,{currentRequests:e.currentRequests-1});case a.API_REQUEST:return Object.assign({},e,{currentRequests:e.currentRequests+1});case a.API_REQUEST_FAILED:var e=Object.assign({},e,{currentRequests:e.currentRequests-1});return e.errors.push(t.error),e;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(223);e.exports=t.default},711:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e={loggedIn:null,key:null}),t.type){case o.RECEIVE_USER:return Object.assign({},e,{loggedIn:!0});case a.AUTH_LOGGED_IN:return Object.assign({},e,{loggedIn:!0,key:t.key});case a.AUTH_LOGGED_OUT:return Object.assign({},e,{loggedIn:!1,key:null});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(289),o=r(290);e.exports=t.default},712:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e=o),t.type){case a.LANGUAGE_CHANGED:return Object.assign({},e,{code:t.code});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(296),o=(r(291),{code:"GB",availableLanguages:{NL:"Dutch",GB:"English"}});e.exports=t.default},713:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e=[]),t.type){case a.NOTIFICATION_ADD:return e.concat([{message:t.message,type:t.level,headline:t.headline,timeout:t.timeout}]);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(288);e.exports=t.default},714:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e={data:null,isSelected:!0}),t.type){case o.CHANGE_SELECTED_POWER_METER:return Object.assign({},e,{isSelected:t.isSelected});case o.FETCH_POWER_METERS_SUCCESS:return Object.assign({},e,{data:t.data,color:t.color});default:return e}}function a(e,t){void 0===e&&(e=l);var r=null;switch(t.type){case i.AUTH_LOGGED_OUT:return l;case o.CHANGE_SELECTED_POWER_METER:return r=Object.assign({},e),r.powerMetersById[t.id]=n(e.powerMetersById[t.id],t),r;case o.FETCH_POWER_METERS:return Object.assign({},e,{isFetching:!0});case o.FETCH_POWER_METERS_SUCCESS:return r=Object.assign({},e,{isFetching:!1}),t.powerMeters.forEach(function(a,o){r.powerMetersById[a.id]=n(e.powerMetersById[a.id],Object.assign({},t,{data:a,color:u[(o+1)%u.length-1]}))}),r;case o.FETCH_POWER_METERS_FAILED:return Object.assign({},e,{isFetching:!1,error:t.error});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=r(422),i=r(289),u=["#2196F3","#4CAF50","#9C27B0","#ff9800","#e51c23"],l={isFetching:!1,error:null,powerMetersById:{}};e.exports=t.default},715:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t,r,n,a){function o(){d=a.shift(),void 0!=d&&(p=parseFloat(d.value_increment),c=new Date(d.datetime),"kwh"==e.unit&&"minute"==t&&(p=1e3*p*60))}var i={minute:"m",hour:"h",day:"d",month:"M"},u=(0,f.default)(r),l=(0,f.default)(n),s=[],d=void 0,c=void 0,p=null,h=i[t];for("m3"==e.unit&&"minute"==t&&(h=i.hour),o();u<=l;)void 0!=d&&u>=c?(s.push([c,p]),o()):s.push([u,null]),u.add(1,h);return s}function i(e,t){switch(void 0===e&&(e={items:[],isFetching:!1,error:null,start:null,end:null,stepSize:null,didInvalidate:!1}),t.type){case s.INVALIDATE_REPORT:return Object.assign({},e,{didInvalidate:!0});case s.FETCH_REPORT:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case s.FETCH_REPORT_SUCCESS:var r=t.powerMeter.data.unit;return"kwh"==r&&"minute"==t.stepSize&&(r="w"),Object.assign({},e,{uniqueId:t.powerMeter.data.id+t.stepSize+t.start+t.end,isFetching:!1,didInvalidate:!1,items:t.report,fullReport:o(t.powerMeter.data,t.stepSize,t.start,t.end,t.report),start:t.start,end:t.end,stepSize:t.stepSize,unit:r,error:null});case s.FETCH_REPORT_FAILED:return Object.assign({},e,{isFetching:!1,error:t.error});default:return e}}function u(e,t){switch(void 0===e&&(e={}),t.type){case d.AUTH_LOGGED_OUT:return{};case s.INVALIDATE_REPORT:case s.FETCH_REPORT:case s.FETCH_REPORT_FAILED:return Object.assign({},e,a({},t.powerMeterId,i(e[t.powerMeterId],t)));case s.FETCH_REPORT_SUCCESS:return Object.assign({},e,a({},t.powerMeter.data.id,i(e[t.powerMeter.data.id],t)));default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var l=r(225),s=(n(l),r(423)),d=r(289),c=r(297),f=n(c);e.exports=t.default},716:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e=i),t.type){case o.AUTH_LOGGED_OUT:return i;case a.CHANGE_REPORT_PERIOD:return Object.assign({},e,{period:t.period,offset:0});case a.CHANGE_REPORT_PERIOD_OFFSET:var r=e.offset;return r+=t.delta,Object.assign({},e,{offset:r>0?0:r});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(424),o=r(289),i={period:"day",offset:0};e.exports=t.default},717:function(e,t,r){"use strict";function n(e,t){switch(void 0===e&&(e=i),t.type){case a.REQUEST_USER:return Object.assign({},e,{isFetching:!0});case a.RECEIVE_USER:return Object.assign({},e,{isFetching:!1,username:t.username,firstName:t.firstName,lastName:t.lastName,email:t.email});case o.AUTH_LOGGED_OUT:return i;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(290),o=r(289),i={username:null,firstName:null,lastName:null,email:null,isFetching:!1};e.exports=t.default}});