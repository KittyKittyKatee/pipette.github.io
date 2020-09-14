let state = {
  products: []
},
getters = {
  ALL_PRODUCTS: state => (state.products),
  PRODUCT_BY_ID: state => {
    return productId => {
      return state.products.find(product =>  product.id == productId)
    }
  }
},
mutations = {
  SET_PRODUCTS: (state, payload) => (state.products = payload)
},
actions = {
  GET_PRODUCTS: async (context) => {
    let response = await fetch('http://localhost:3000/products');
    let data = await response.json();
    context.commit('SET_PRODUCTS',data)
  }
}

export default {state, getters, mutations, actions}