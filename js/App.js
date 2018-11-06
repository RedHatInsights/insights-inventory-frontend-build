/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/insights/platform/inventory/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _containers_AlertsContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/AlertsContainer */ "./src/containers/AlertsContainer.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store */ "./src/store/index.js");






var _dec, _class;










var App = (_dec = Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["registry"])(), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props));

    _this.getRegistry().register(_store__WEBPACK_IMPORTED_MODULE_13__["reducers"]);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      insights.chrome.init();
      insights.chrome.identifyApp(_config__WEBPACK_IMPORTED_MODULE_10__["INVENTORY_ROOT"]);
      this.appNav = insights.chrome.on('APP_NAVIGATION', function (event) {
        return _this2.props.history.push("/".concat(event.navId));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.appNav();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_containers_AlertsContainer__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_8__["Routes"], {
        childProps: this.props
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class);
App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/**
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["routerParams"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])()(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes_Inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/Inventory */ "./src/routes/Inventory.js");







var InsightsRoute = function InsightsRoute(_ref) {
  var Component = _ref.component,
      rootClass = _ref.rootClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["component", "rootClass"]);

  var root = document.getElementById('root');
  root.removeAttribute('class');
  root.classList.add("page__".concat(rootClass), 'pf-l-page__main');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
    component: Component
  }));
};

InsightsRoute.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  rootClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */

var Routes = function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: "/entity",
    component: _routes_Inventory__WEBPACK_IMPORTED_MODULE_5__["default"],
    rootClass: "inventory"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/entity"
  }));
};

/***/ }),

/***/ "./src/Utilities/expiringComponent.js":
/*!********************************************!*\
  !*** ./src/Utilities/expiringComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);







var DEFAULT_TIMEOUT = 6000;
/*
 * Expiring Component HOC
 * Causes the given function to be invoked after the given component has been rendered for
 * the given amount of time (defaults to 6000ms)
 */

function expiringComponent(Component, fn) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_TIMEOUT;
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ExpiringWrapper, _React$Component);

      function ExpiringWrapper() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExpiringWrapper);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ExpiringWrapper).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ExpiringWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          setTimeout(fn, timeout);
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, this.props);
        }
      }]);

      return ExpiringWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)
  );
}

expiringComponent.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component).isRequired,
  fn: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (expiringComponent);

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: loadEntities, loadEntity, addAlert, dismissAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEntities", function() { return loadEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEntity", function() { return loadEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlert", function() { return addAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dismissAlert", function() { return dismissAlert; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");


var loadEntities = function loadEntities() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].GET_ENTITIES,
    payload: Object(_api__WEBPACK_IMPORTED_MODULE_1__["getEntities"])().then(function (data) {
      return data.items || data;
    })
  };
};
var loadEntity = function loadEntity(id) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].GET_ENTITY,
    payload: Object(_api__WEBPACK_IMPORTED_MODULE_1__["getEntity"])(id)
  };
};
var addAlert = function addAlert(_ref) {
  var title = _ref.title,
      _ref$dismissible = _ref.dismissible,
      dismissible = _ref$dismissible === void 0 ? false : _ref$dismissible,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'warning' : _ref$variant;
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].ALERT_ADD,
    payload: {
      title: title,
      dismissible: dismissible,
      variant: variant
    }
  };
};
var dismissAlert = function dismissAlert(alert) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].ALERT_DISMISS,
    alert: alert,
    timeout: timeout
  };
};

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getEntities, getEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");

/* eslint camelcase: off */

function buildMock(i) {
  return {
    id: i,
    canonical_facts: {
      machine_id: "".concat(i, "c1497de-0ec7-43bb-a8a6-35cabd59e0bf")
    },
    account: '000001',
    facts: [{
      facts: {
        hostname: "server0".concat(i, ".redhat.com"),
        release: 'Red Hat Enterprise Linux Server release 7.5 (Maipo)',
        rhel_version: '7.5',
        host_system_id: '6c1497de-0ec7-43bb-a8a6-35cabd59e0bf',
        bios_information: {
          vendor: 'SeaBIOS',
          version: '1.10.2-3.el7_4.1',
          release_date: '04/01/2014',
          bios_revision: '0.0'
        },
        system_information: {
          family: 'Red Hat Enterprise Linux',
          manufacturer: 'Red Hat',
          product_name: 'RHEV Hypervisor',
          virtual_machine: true
        },
        listening_processes: [],
        timezone_information: {
          timezone: 'EDT',
          utcoffset: '-0400'
        }
      },
      namespace: 'insights'
    }],
    health: {
      vulnerabilities: {
        title: 5,
        redirect: 'cost_management'
      },
      configuration: {
        title: 10,
        redirect: 'configuration_assessment'
      },
      compliance: {
        title: '74%',
        redirect: 'compliance'
      },
      cost: {
        title: '23K',
        redirect: 'cost_management'
      }
    },
    display_name: "Red Hat Enterprise Linux Server release 7.5 (Maipo)"
  };
}

var MOCKS = Array.from({
  length: 5
}).map(function (v, i) {
  return buildMock(i);
});
var mockWarnCount = 0;
function getEntities() {
  return fetch(_config__WEBPACK_IMPORTED_MODULE_0__["INVENTORY_API_BASE"]).then(function (r) {
    if (r.ok) {
      return r.json().then(function (data) {
        return data.map(function (row) {
          return {
            id: row.id,
            health: {
              vulnerabilities: {
                title: 5,
                redirect: 'cost_management'
              },
              configuration: {
                title: 10,
                redirect: 'configuration_assessment'
              },
              compliance: {
                title: '74%',
                redirect: 'compliance'
              },
              cost: {
                title: '23K',
                redirect: 'cost_management'
              }
            }
          };
        });
      });
    }

    if (r.status === 404) {
      if (!mockWarnCount) {
        mockWarnCount++;
      }

      return {
        items: MOCKS,
        isMocked: true
      };
    }

    throw new Error("Unexpected response code ".concat(r.status));
  });
}
function getEntity(id) {
  return getEntities().then(function (entities) {
    return (entities.items || entities).find(function (e) {
      return e.id === id;
    });
  });
}

/***/ }),

/***/ "./src/components/Alerts.js":
/*!**********************************!*\
  !*** ./src/components/Alerts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Alerts_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alerts.scss */ "./src/components/Alerts.scss");
/* harmony import */ var _Alerts_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Alerts_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utilities_expiringComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utilities/expiringComponent */ "./src/Utilities/expiringComponent.js");





 // MARK: implement this in components

var Alerts = function Alerts(_ref) {
  var alerts = _ref.alerts,
      dismiss = _ref.dismiss;

  if (!alerts.length) {
    return null;
  }

  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alerts"
  }, alerts.map(function (alert) {
    var action = alert.dismissible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "secondary",
      onClick: function onClick() {
        return dismiss(alert);
      }
    }, "Dismiss") : undefined;
    var Component = alert.dismissible ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"] : Object(_Utilities_expiringComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], function () {
      return dismiss(alert, true);
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
      variant: alert.variant,
      title: alert.title,
      key: alert.id,
      action: action
    });
  }).reverse()), document.getElementById('root'));
};

Alerts.propTypes = {
  alerts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  dismiss: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Alerts);

/***/ }),

/***/ "./src/components/Alerts.scss":
/*!************************************!*\
  !*** ./src/components/Alerts.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/inventory/AsyncInventory.js":
/*!****************************************************!*\
  !*** ./src/components/inventory/AsyncInventory.js ***!
  \****************************************************/
/*! exports provided: asyncInventoryLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncInventoryLoader", function() { return asyncInventoryLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");




var asyncInventoryLoader = function asyncInventoryLoader() {
  return insights.loadInventory({
    react: react__WEBPACK_IMPORTED_MODULE_0___default.a,
    reactRouterDom: react_router_dom__WEBPACK_IMPORTED_MODULE_1__,
    reactCore: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__,
    reactIcons: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__
  });
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: INVENTORY_API_BASE, INVENTORY_ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVENTORY_API_BASE", function() { return INVENTORY_API_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVENTORY_ROOT", function() { return INVENTORY_ROOT; });
var INVENTORY_API_BASE = '/entities';
var INVENTORY_ROOT = 'inventory';

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ACTION_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/keyBy */ "./node_modules/lodash/keyBy.js");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__);



var actions = ['ALERT_ADD', 'ALERT_DISMISS'];
var asyncActions = lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default()(['GET_ENTITIES', 'GET_ENTITY'], function (a) {
  return [a, "".concat(a, "_PENDING"), "".concat(a, "_FULFILLED"), "".concat(a, "_REJECTED")];
});
var ACTION_TYPES = lodash_keyBy__WEBPACK_IMPORTED_MODULE_1___default()(actions.concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(asyncActions)), function (k) {
  return k;
});

/***/ }),

/***/ "./src/containers/AlertsContainer.js":
/*!*******************************************!*\
  !*** ./src/containers/AlertsContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Alerts */ "./src/components/Alerts.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions.js");



var AlertsContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(function (_ref) {
  var alerts = _ref.alerts;
  return {
    alerts: alerts
  };
}, function (dispatch) {
  return {
    dismiss: function dismiss(alert, timeout) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__["dismissAlert"](alert, timeout));
    }
  };
})(_components_Alerts__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (AlertsContainer);

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: Object(_store__WEBPACK_IMPORTED_MODULE_4__["init"])(redux_logger__WEBPACK_IMPORTED_MODULE_6___default.a).getStore()
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "/insights/platform/inventory"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/routes/Inventory.js":
/*!*********************************!*\
  !*** ./src/routes/Inventory.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _inventory_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inventory.scss */ "./src/routes/inventory.scss");
/* harmony import */ var _inventory_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_inventory_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _components_inventory_AsyncInventory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/inventory/AsyncInventory */ "./src/components/inventory/AsyncInventory.js");









var _dec, _class;












var Inventory = (_dec = Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["registry"])(), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Inventory, _Component);

  function Inventory(props, ctx) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Inventory);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Inventory).call(this, props, ctx));

    _this.loadInventory();

    _this.alert1 = function () {
      return _this.props.addAlert({
        title: 'Dismissible alert',
        dismissible: true
      });
    };

    _this.alert2 = function () {
      return _this.props.addAlert({
        title: 'Non-dismissible alert',
        dismissible: false
      });
    };

    _this.state = {
      ConnectedInventory: function ConnectedInventory() {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Loading..");
      }
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Inventory, [{
    key: "loadInventory",
    value: function () {
      var _loadInventory = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var _ref, inventoryConnector, INVENTORY_ACTION_TYPES, mergeWithEntities, mergeWithDetail;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_components_inventory_AsyncInventory__WEBPACK_IMPORTED_MODULE_16__["asyncInventoryLoader"])();

              case 2:
                _ref = _context.sent;
                inventoryConnector = _ref.inventoryConnector;
                INVENTORY_ACTION_TYPES = _ref.INVENTORY_ACTION_TYPES;
                mergeWithEntities = _ref.mergeWithEntities;
                mergeWithDetail = _ref.mergeWithDetail;
                this.getRegistry().register(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, mergeWithEntities(_store__WEBPACK_IMPORTED_MODULE_14__["entitiesReducer"]), mergeWithDetail(Object(_store__WEBPACK_IMPORTED_MODULE_14__["entitesDetailReducer"])(INVENTORY_ACTION_TYPES))));
                this.entitiesListener = Object(_store__WEBPACK_IMPORTED_MODULE_14__["addNewListener"])({
                  actionType: INVENTORY_ACTION_TYPES.LOAD_ENTITIES,
                  callback: this.props.loadEntities
                });
                this.entityListener = Object(_store__WEBPACK_IMPORTED_MODULE_14__["addNewListener"])({
                  actionType: INVENTORY_ACTION_TYPES.LOAD_ENTITY,
                  callback: function callback(_ref2) {
                    var data = _ref2.data;
                    data.then(function (payload) {
                      payload.error && _this2.props.addAlert({
                        title: payload.error.message
                      });

                      _this2.props.loadEntity(payload.id);
                    });
                  }
                });
                this.setState({
                  ConnectedInventory: inventoryConnector()
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function loadInventory() {
        return _loadInventory.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.entitiesListener();
    }
  }, {
    key: "render",
    value: function render() {
      var ConnectedInventory = this.state.ConnectedInventory;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["PageHeader"], {
        className: "pf-m-light"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["PageHeaderTitle"], {
        title: "Inventory"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Main"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["GridItem"], {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Card"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ConnectedInventory, null)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["GridItem"], {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Card"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "buttons"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        variant: "secondary",
        onClick: this.alert1
      }, "Dismissible alert"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        variant: "secondary",
        onClick: this.alert2
      }, "Non-dismissible alert"))))))));
    }
  }]);

  return Inventory;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class);
Inventory.contextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};
Inventory.propTypes = {
  addAlert: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  loadEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

function mapDispatchToProps(dispatch) {
  return {
    addAlert: function addAlert(payload) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_15__["addAlert"](payload));
    },
    loadEntities: function loadEntities() {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_15__["loadEntities"]());
    },
    loadEntity: function loadEntity(id) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_15__["loadEntity"](id));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["routerParams"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function () {
  return {};
}, mapDispatchToProps)(Inventory)));

/***/ }),

/***/ "./src/routes/inventory.scss":
/*!***********************************!*\
  !*** ./src/routes/inventory.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: reducers, entitiesReducer, entitesDetailReducer, init, addNewListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewListener", function() { return addNewListener; });
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/MiddlewareListener */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/MiddlewareListener.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["entitiesReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitesDetailReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["entitesDetailReducer"]; });





var middlewareListener;
function init() {
  middlewareListener = new _red_hat_insights_insights_frontend_components_Utilities_MiddlewareListener__WEBPACK_IMPORTED_MODULE_0___default.a();

  for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {
    middleware[_key] = arguments[_key];
  }

  return Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["getRegistry"])({}, [middlewareListener.getMiddleware(), Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2__["default"])()].concat(middleware));
}
function addNewListener(_ref) {
  var actionType = _ref.actionType,
      callback = _ref.callback;
  return middlewareListener.addNew({
    on: actionType,
    callback: callback
  });
}

/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/*! exports provided: entitiesReducer, entitesDetailReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesReducer", function() { return entitiesReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitesDetailReducer", function() { return entitesDetailReducer; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/ReducerRegistry */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/ReducerRegistry.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/Utilities/helpers */ "./node_modules/@red-hat-insights/insights-frontend-components/Utilities/helpers.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_Utilities_helpers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_Utilities_helpers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);





var _objectSpread2;







var alertIdGenerator = 0;
var defaultState = {
  loaded: false
};

function entitiesLoaded(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, state, {
    // eslint-disable-next-line no-unused-vars
    rows: Object(_red_hat_insights_insights_frontend_components_Utilities_helpers__WEBPACK_IMPORTED_MODULE_8__["mergeArraysByKey"])([state.rows, payload.map(function (_ref2) {
      var displayName = _ref2.display_name,
          rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["display_name"]);

      return rest;
    })]),
    // eslint-disable-next-line no-unused-vars
    entities: Object(_red_hat_insights_insights_frontend_components_Utilities_helpers__WEBPACK_IMPORTED_MODULE_8__["mergeArraysByKey"])([state.entities, payload.map(function (_ref3) {
      var displayName = _ref3.display_name,
          rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, ["display_name"]);

      return rest;
    })])
  });
}

function entityLoaded(state, _ref4) {
  var payload = _ref4.payload;

  var health = payload.health,
      tags = payload.tags,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(payload, ["health", "tags"]);

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, state, {
    health: health,
    tags: tags,
    entity: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, state.entity, rest)
  });
}

function enableApplications(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, state, {
    loaded: true,
    activeApps: [{
      title: 'Overview',
      name: 'overview',
      component: _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Overview"]
    }, {
      title: 'Vulnerabilities',
      name: 'vulnerabilities'
    }, {
      title: 'Configuration Assessment',
      name: 'configuration_assessment'
    }, {
      title: 'Compliance',
      name: 'compliance'
    }, {
      title: 'Cost Managemenet',
      name: 'cost_management'
    }, {
      title: 'General Information',
      name: 'general_information',
      component: _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["GeneralInformation"]
    }]
  });
}

var reducers = {
  alerts: Object(_red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_7__["applyReducerHash"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()((_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, _constants__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].ALERT_ADD, function (state, _ref5) {
    var payload = _ref5.payload;
    return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state).concat([_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({
      id: alertIdGenerator++
    }, payload)]);
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, _constants__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].ALERT_DISMISS, function (state, action) {
    return state.filter(function (alert) {
      return alert.id !== action.alert.id;
    });
  }), _objectSpread2), lodash_mapValues__WEBPACK_IMPORTED_MODULE_5___default()(lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(_constants__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"], function (type) {
    return type.endsWith('_REJECTED');
  }), function () {
    return function (state, action) {
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state).concat([{
        title: action.payload.message,
        id: alertIdGenerator++,
        dismissible: true,
        variant: 'warning'
      }]);
    };
  })), [])
};
var entitiesReducer = Object(_red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_7__["applyReducerHash"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _constants__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].GET_ENTITIES_FULFILLED, entitiesLoaded), defaultState);
var entitesDetailReducer = function entitesDetailReducer(INVENTORY_ACTION_TYPES) {
  var _applyReducerHash2;

  return Object(_red_hat_insights_insights_frontend_components_Utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_7__["applyReducerHash"])((_applyReducerHash2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_applyReducerHash2, INVENTORY_ACTION_TYPES.LOAD_ENTITY_FULFILLED, enableApplications), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_applyReducerHash2, _constants__WEBPACK_IMPORTED_MODULE_6__["ACTION_TYPES"].GET_ENTITY_FULFILLED, entityLoaded), _applyReducerHash2), defaultState);
};
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map