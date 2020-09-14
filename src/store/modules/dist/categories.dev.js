"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  baby: [],
  mom: []
},
    getters = {
  BABY_CATEGORIES_MAIN: function BABY_CATEGORIES_MAIN(state) {
    var arr = state.baby.slice(0, 6);
    arr = arr.map(function (item) {
      return {
        title: item.title
      };
    });
    return arr;
  },
  BABY_CATEGORIES_FAVORITES: function BABY_CATEGORIES_FAVORITES(state) {
    var arr = state.baby;
    arr = arr.sort(function (a, b) {
      return b.rating - a.rating;
    });
    arr = arr.slice(0, 4);
    return arr;
  },
  MOM_CATEGORIES_MAIN: function MOM_CATEGORIES_MAIN(state) {
    var arr = state.mom.slice(0, 6);
    arr = arr.map(function (item) {
      return {
        title: item.title
      };
    });
    return arr;
  },
  MOM_CATEGORIES_FAVORITES: function MOM_CATEGORIES_FAVORITES(state) {
    var arr = state.mom;
    arr = arr.sort(function (a, b) {
      return b.rating - a.rating;
    });
    arr = arr.slice(0, 4);
    return arr;
  }
},
    mutations = {
  SET_CATEGORIES_BABY: function SET_CATEGORIES_BABY(state, payload) {
    return state.baby = payload;
  },
  SET_CATEGORIES_MOM: function SET_CATEGORIES_MOM(state, payload) {
    return state.mom = payload;
  }
},
    actions = {
  GET_CATEGORIES_BABY: function GET_CATEGORIES_BABY(_ref) {
    var commit, response, data;
    return regeneratorRuntime.async(function GET_CATEGORIES_BABY$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch("http://localhost:3000/products?category=1"));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context.sent;
            commit("SET_CATEGORIES_BABY", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  GET_CATEGORIES_MOM: function GET_CATEGORIES_MOM(_ref2) {
    var commit, response, data;
    return regeneratorRuntime.async(function GET_CATEGORIES_MOM$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch("http://localhost:3000/products?category=2"));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context2.sent;
            commit("SET_CATEGORIES_MOM", data);

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