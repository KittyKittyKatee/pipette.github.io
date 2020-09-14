import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products.js'
import reviews from './modules/reviews.js'
import cart from './modules/cart.js'
import categories from './modules/categories.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    reviews,
    cart,
    categories
  }
})
