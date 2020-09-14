"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _products = _interopRequireDefault(require("./modules/products.js"));

var _reviews = _interopRequireDefault(require("./modules/reviews.js"));

var _cart = _interopRequireDefault(require("./modules/cart.js"));

var _categories = _interopRequireDefault(require("./modules/categories.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products: _products["default"],
    reviews: _reviews["default"],
    cart: _cart["default"],
    categories: _categories["default"]
  }
});

exports["default"] = _default;