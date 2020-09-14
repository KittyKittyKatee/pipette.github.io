let state = {
    baby: [],
    mom: [],
  },
  getters = {
    BABY_CATEGORIES_MAIN: (state) => {
      let arr = state.baby.slice(0, 6);
      arr = arr.map((item) => ({
        title: item.title,
      }));
      return arr;
    },
    BABY_CATEGORIES_FAVORITES: (state) => {
      let arr = state.baby;
      arr = arr.sort((a, b) => b.rating - a.rating);
      arr = arr.slice(0, 4);
      return arr;
    },
    MOM_CATEGORIES_MAIN: (state) => {
      let arr = state.mom.slice(0, 6);
      arr = arr.map((item) => ({
        title: item.title,
      }));
      return arr;
    },
    MOM_CATEGORIES_FAVORITES: (state) => {
      let arr = state.mom;
      arr = arr.sort((a, b) => b.rating - a.rating);
      arr = arr.slice(0, 4);
      return arr;
    },
  },
  mutations = {
    SET_CATEGORIES_BABY: (state, payload) => (state.baby = payload),
    SET_CATEGORIES_MOM: (state, payload) => (state.mom = payload),
  },
  actions = {
    GET_CATEGORIES_BABY: async ({ commit }) => {
      let response = await fetch("http://localhost:3000/products?category=1");
      let data = await response.json();
      commit("SET_CATEGORIES_BABY", data);
    },
    GET_CATEGORIES_MOM: async ({ commit }) => {
      let response = await fetch("http://localhost:3000/products?category=2");
      let data = await response.json();
      commit("SET_CATEGORIES_MOM", data);
    },
  };

export default { state, getters, mutations, actions };
