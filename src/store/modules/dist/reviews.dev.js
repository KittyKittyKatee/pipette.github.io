"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  reviews: []
},
    getters = {
  ALL_REVIEWS: function ALL_REVIEWS(state) {
    return state.reviews;
  }
},
    mutations = {
  SET_REVIEWS: function SET_REVIEWS(state, payload) {
    return state.reviews = payload;
  },
  SET_NEW_REVIEW: function SET_NEW_REVIEW(state, payload) {
    return state.reviews.push(payload);
  }
},
    actions = {
  GET_REVIEWS: function GET_REVIEWS(_ref, id) {
    var commit, response, data;
    return regeneratorRuntime.async(function GET_REVIEWS$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch('http://localhost:3000/reviews?productId=' + id));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context.sent;
            commit('SET_REVIEWS', data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  ADD_REVIEW: function ADD_REVIEW(_ref2, review) {
    var commit, response, data;
    return regeneratorRuntime.async(function ADD_REVIEW$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch('http://localhost:3000/reviews', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(review)
            }));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context2.sent;
            commit('SET_NEW_REVIEW', data);

          case 8:
          case "end":
            return _context2.stop();
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