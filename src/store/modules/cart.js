let state = {
  cart: [{
    "count": 5,
    "id": "1"
  }],
  cartStatus: false
},
getters = {
  CART: state => (state.cart),
  CART_COUNT: state => state.cart.reduce(((acc, current) => acc + current.count),0),
  CART_STATUS: state => (state.cartStatus)
},
mutations = {
  SET_CART: (state, payload) => state.cart = payload,
  SET_TO_CART: (state, payload) => state.cart.push(payload),
  PUT_TO_CART: (state, payload) => {
    let findItem = state.cart.filter(position => position.id == payload.id);
    findItem[0].count = payload.count;
  },
  REMOVE_FROM_CART: (state, payload) => {
    const newCart = state.cart.filter(item => item.id != payload);
    console.log(payload)
    console.log(newCart)
    state.cart = newCart;
  },
  OPEN_CLOSE_CART: (state) => state.cartStatus = !state.cartStatus
},
actions = {
  ADD_TO_CART: async ({commit, state}, item) => {
    if (state.cart.some(position => position.id == item.id)) {
      let findItem = state.cart.filter(position => position.id == item.id)[0];
      findItem.count = findItem.count + item.count;
      let response = await fetch('http://localhost:3000/cart/' + item.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(findItem)
      })
      let data = await response.json();
      commit('PUT_TO_CART', data);
    } else {
      let response = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
      })
      let data = await response.json();
      commit('SET_TO_CART', data);
    }
  },
  SET_CART: async ({commit}) => {
    let response = await fetch('http://localhost:3000/cart');
    let data = await response.json();
    commit('SET_CART',data);
  },
  REMOVE_FROM_CART: async ({commit}, id) => {
    let response = await fetch('http://localhost:3000/cart/' + id, {
      method: 'DELETE'
    });
    let data = await response.json();
    commit('REMOVE_FROM_CART', id);
  }
}

export default {state, getters, mutations, actions}