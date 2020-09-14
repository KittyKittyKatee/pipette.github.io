"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  cart: [{
    "count": 5,
    "id": "1"
  }],
  cartStatus: false
},
    getters = {
  CART: function CART(state) {
    return state.cart;
  },
  CART_COUNT: function CART_COUNT(state) {
    return state.cart.reduce(function (acc, current) {
      return acc + current.count;
    }, 0);
  },
  CART_STATUS: function CART_STATUS(state) {
    return state.cartStatus;
  }
},
    mutations = {
  SET_CART: function SET_CART(state, payload) {
    return state.cart = payload;
  },
  SET_TO_CART: function SET_TO_CART(state, payload) {
    return state.cart.push(payload);
  },
  PUT_TO_CART: function PUT_TO_CART(state, payload) {
    var findItem = state.cart.filter(function (position) {
      return position.id == payload.id;
    });
    findItem[0].count = payload.count;
  },
  REMOVE_FROM_CART: function REMOVE_FROM_CART(state, payload) {
    var newCart = state.cart.filter(function (item) {
      return item.id != payload;
    });
    console.log(payload);
    console.log(newCart);
    state.cart = newCart;
  },
  OPEN_CLOSE_CART: function OPEN_CLOSE_CART(state) {
    return state.cartStatus = !state.cartStatus;
  }
},
    actions = {
  ADD_TO_CART: function ADD_TO_CART(_ref, item) {
    var commit, state, findItem, response, data, _response, _data;

    return regeneratorRuntime.async(function ADD_TO_CART$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;

            if (!state.cart.some(function (position) {
              return position.id == item.id;
            })) {
              _context.next = 13;
              break;
            }

            findItem = state.cart.filter(function (position) {
              return position.id == item.id;
            })[0];
            findItem.count = findItem.count + item.count;
            _context.next = 6;
            return regeneratorRuntime.awrap(fetch('http://localhost:3000/cart/' + item.id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(findItem)
            }));

          case 6:
            response = _context.sent;
            _context.next = 9;
            return regeneratorRuntime.awrap(response.json());

          case 9:
            data = _context.sent;
            commit('PUT_TO_CART', data);
            _context.next = 20;
            break;

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(fetch('http://localhost:3000/cart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(item)
            }));

          case 15:
            _response = _context.sent;
            _context.next = 18;
            return regeneratorRuntime.awrap(_response.json());

          case 18:
            _data = _context.sent;
            commit('SET_TO_CART', _data);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  SET_CART: function SET_CART(_ref2) {
    var commit, response, data;
    return regeneratorRuntime.async(function SET_CART$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch('http://localhost:3000/cart'));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context2.sent;
            commit('SET_CART', data);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  REMOVE_FROM_CART: function REMOVE_FROM_CART(_ref3, id) {
    var commit, response, data;
    return regeneratorRuntime.async(function REMOVE_FROM_CART$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit;
            _context3.next = 3;
            return regeneratorRuntime.awrap(fetch('http://localhost:3000/cart/' + id, {
              method: 'DELETE'
            }));

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context3.sent;
            commit('REMOVE_FROM_CART', id);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;