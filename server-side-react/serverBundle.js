module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _server = __webpack_require__(1);

	var _server2 = _interopRequireDefault(_server);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRedux = __webpack_require__(4);

	var _redux = __webpack_require__(5);

	var _reduxThunk = __webpack_require__(6);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _history = __webpack_require__(7);

	var _reactRouterRedux = __webpack_require__(8);

	var _routes = __webpack_require__(9);

	var _routes2 = _interopRequireDefault(_routes);

	var _reducers = __webpack_require__(20);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.handleRender = function (req, res) {
	  var html = '<html>\n  <head>\n    <title>\n      Render a stateless component\n    </title>\n\n  </head>\n  <body>\n    <div id="container">\n    </div>\n    <script src="bundle.js"></script>\n  </body>\n</html>';
	  var renderPage = function renderPage(markup, preloadedState) {
	    return '<html>\n  <head>\n    <title>\n      Render a stateless component\n    </title>\n\n  </head>\n  <body>\n    <div id="container">\n      <div>' + markup + '<div>\n    </div>\n    <script src="bundle.js"></script>\n    <script>window.__PRELOAD__=' + JSON.stringify(preloadedState) + '</script>\n  </body>\n</html>';
	  };
	  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).send(err.message);
	    }
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	    var markup = void 0;
	    if (renderProps) {
	      // console.log(renderProps);
	      var getReduxPromise = function getReduxPromise() {
	        var location = renderProps.location,
	            params = renderProps.params;

	        var coo = renderProps.components[renderProps.components.length - 1];
	        var comp = coo.WrappedComponent;
	        var promise = comp.fetchData ? comp.fetchData({ location: location, params: params, store: store }) : Promise.resolve();
	        return promise;
	      };
	      getReduxPromise().then(function () {
	        var reduxStore = store.getState();
	        var preloadedState = JSON.stringify(reduxStore);
	        markup = _server2.default.renderToString(_react2.default.createElement(
	          _reactRedux.Provider,
	          { store: store },
	          _react2.default.createElement(_reactRouter.RouterContext, renderProps)
	        ), function (errr) {
	          console.log(errr);
	        });
	        res.send(renderPage(markup, preloadedState));
	      });
	    } else {
	      res.status(404);
	    }
	  });
	  //res.send(html);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("history");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IndexRoute = __webpack_require__(10);

	var _IndexRoute2 = _interopRequireDefault(_IndexRoute);

	var _Route = __webpack_require__(11);

	var _Route2 = _interopRequireDefault(_Route);

	var _index = __webpack_require__(12);

	var _index2 = _interopRequireDefault(_index);

	var _ProductList = __webpack_require__(13);

	var _ProductList2 = _interopRequireDefault(_ProductList);

	var _Product = __webpack_require__(18);

	var _Product2 = _interopRequireDefault(_Product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _Route2.default,
	  { path: '/', component: _index2.default },
	  _react2.default.createElement(_IndexRoute2.default, { component: _ProductList2.default }),
	  _react2.default.createElement(_Route2.default, { path: 'product/:id', component: _Product2.default })
	);

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-router/lib/IndexRoute");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-router/lib/Route");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "parent-node" },
	    props.children
	  );
	};

	App.propTypes = {
	  children: _react.PropTypes.node
	};

	exports.default = App;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(4);

	var _actions = __webpack_require__(14);

	var _actions2 = _interopRequireDefault(_actions);

	var _ProductList = __webpack_require__(17);

	var _ProductList2 = _interopRequireDefault(_ProductList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    productList: state.sample.productList,
	    specialityList: state.sample.specialityList
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    getAllspecialities: function getAllspecialities() {
	      dispatch(_actions2.default.getDummySpeciality());
	    }
	  };
	};

	var ProductList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProductList2.default);

	exports.default = ProductList;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _axios = __webpack_require__(15);

	var _axios2 = _interopRequireDefault(_axios);

	var _APIEndpoints = __webpack_require__(16);

	var _APIEndpoints2 = _interopRequireDefault(_APIEndpoints);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modifyProduct = function modifyProduct(desc, id) {
	  return {
	    type: 'MODIFY_PRODUCT',
	    desc: desc,
	    id: id
	  };
	};

	var getSpecialitySuccess = function getSpecialitySuccess(data) {
	  return {
	    type: 'SPECIALITY_SUCCESS',
	    data: data
	  };
	};

	var asynccc = function asynccc() {
	  var p = Promise;
	  return p.resolve();
	};

	exports.default = {
	  getAllSpecialities: function getAllSpecialities() {
	    return function (dispatch) {
	      return _axios2.default.get('https://stagapi.1mgdoctors.com/api/specialities', {
	        headers: { Accept: 'application/1mgdoctors.v2', Authorization: 'Token token="f77f883849e5bb2099849a055a6b608c0486a564598e048834291ec7e6fe"' }
	      }).then(function (response) {
	        dispatch(getSpecialitySuccess(response.data));
	      });
	    };
	  },
	  getDummySpeciality: function getDummySpeciality() {
	    // return (dispatch) => {
	    //   return Promise.resolve().then(() => {
	    //     dispatch(getSpecialitySuccess({specialities: [
	    //       {name: "Ayurvedic Doctor"},
	    //       {name: "Child Specialist"},
	    //       {name: "Dentist"},
	    //       {name: "Skin Specialist"},
	    //       {name: "Diabetes Specialist"},
	    //       {name: "Dietitian"},
	    //       {name: "ENT Specialist"},
	    //       {name: "Eye Specialist"},
	    //       {name: "General Physician"}
	    //       ]}))
	    //   })
	    // }
	    return function (dispatch) {
	      var promise = new Promise(function (resolve, reject) {
	        setTimeout(function () {
	          resolve({ specialities: [{ name: "Ayurvedic Doctor" }, { name: "Child Specialist" }, { name: "Dentist" }, { name: "Skin Specialist" }, { name: "Diabetes Specialist" }, { name: "Dietitian" }, { name: "ENT Specialist" }, { name: "Eye Specialist" }, { name: "General Physician" }] });
	        }, 100);
	      }).then(function (data) {
	        dispatch(getSpecialitySuccess(data));
	      });

	      return promise;
	    };
	  },

	  modifyProduct: modifyProduct
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  GET_ALL_SPECIALITIES: {
	    uri: function uri() {
	      return 'specialities';
	    },

	    method: 'GET',
	    params: []
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(14);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductList = function (_Component) {
	  _inherits(ProductList, _Component);

	  function ProductList() {
	    _classCallCheck(this, ProductList);

	    return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
	  }

	  _createClass(ProductList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.getAllspecialities();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var specialityList = this.props.specialityList;

	      var pl = this.props.productList;
	      var products = Object.keys(pl);

	      return _react2.default.createElement(
	        'ul',
	        null,
	        specialityList.map(function (da, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: i },
	            da.name
	          );
	        })
	      );
	    }
	  }], [{
	    key: 'fetchData',
	    value: function fetchData(_ref) {
	      var store = _ref.store;

	      return store.dispatch(_actions2.default.getDummySpeciality());
	    }
	  }]);

	  return ProductList;
	}(_react.Component);

	ProductList.propTypes = {
	  productList: _react.PropTypes.object.isRequired,
	  specialityList: _react.PropTypes.any
	};

	exports.default = ProductList;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(4);

	var _actions = __webpack_require__(14);

	var _actions2 = _interopRequireDefault(_actions);

	var _Product = __webpack_require__(19);

	var _Product2 = _interopRequireDefault(_Product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    productList: state.sample.productList
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onKeyUp: function onKeyUp(desc, id) {
	      dispatch(_actions2.default.modifyProduct(desc, id));
	    }
	  };
	};

	var Product = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Product2.default);

	exports.default = Product;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Product = function Product(props) {
	  var productList = props.productList,
	      params = props.params;

	  var product = productList[params.id];
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "h3",
	      null,
	      product.name
	    ),
	    _react2.default.createElement(
	      "h5",
	      null,
	      product.brand
	    ),
	    _react2.default.createElement(
	      "div",
	      null,
	      product.currency,
	      " ",
	      product.price
	    ),
	    _react2.default.createElement(
	      "div",
	      null,
	      product.description
	    ),
	    _react2.default.createElement("input", { type: "text", name: "modifyDescription", onKeyUp: function onKeyUp(e) {
	        return props.onKeyUp(e.target.value, params.id);
	      } })
	  );
	};

	Product.propTypes = {
	  productList: _react.PropTypes.object,
	  params: _react.PropTypes.object,
	  onKeyUp: _react.PropTypes.func
	};

	exports.default = Product;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(5);

	var _reactRouterRedux = __webpack_require__(8);

	var _objectAssign = __webpack_require__(21);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  productList: {
	    100: {
	      name: 'Dant Kanti',
	      brand: 'Patanjali',
	      price: 234.50,
	      currency: 'INR',
	      description: 'Patanjali Dant kanti is used to protect the teeth. It contains Akarkara, Babul, Neem, Timbaru, Turmeric, Cloves, Pudin, Pippali, Peelu and maju phal'
	    },
	    101: {
	      name: '3M 9004V PARTICULATE RESPIRATOR MASK ',
	      brand: '3M India Limited',
	      price: 400.00,
	      currency: 'INR',
	      description: '3M 9004V is a dust mask composed of three layers of filters. The outermost layer filters out the largest dust particles, the innermost layer preserves the respirator’s shape and the middle layer is composed of electrostatic filter media.'
	    },
	    102: {
	      name: '6M 9004V PARTICULATE RESPIRATOR MASK ',
	      brand: '6M India Limited',
	      price: 6400.00,
	      currency: 'INR',
	      description: '6M 9004V is a dust mask composed of three layers of filters. The outermost layer filters out the largest dust particles, the innermost layer preserves the respirator’s shape and the middle layer is composed of electrostatic filter media.'
	    }
	  },
	  specialityList: []
	};

	var sample = function sample() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case 'MODIFY_PRODUCT':
	      {
	        var desc = action.desc,
	            id = action.id;

	        var productList = (0, _objectAssign2.default)({}, state.productList);
	        var product = productList[id];
	        product.description = desc;

	        return (0, _objectAssign2.default)({}, state, { productList: productList });
	      };
	    case 'SPECIALITY_SUCCESS':
	      {
	        return (0, _objectAssign2.default)({}, state, {
	          specialityList: action.data.specialities
	        });
	      }
	    default:
	      return state;
	  }
	};

	exports.default = (0, _redux.combineReducers)({
	  sample: sample,
	  routing: _reactRouterRedux.routerReducer
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("object-assign");

/***/ }
/******/ ]);