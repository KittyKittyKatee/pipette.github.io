let state = {
  reviews: []
},
getters = {
  ALL_REVIEWS: state => (state.reviews),
},
mutations = {
  SET_REVIEWS: (state, payload) => state.reviews = payload,
  SET_NEW_REVIEW: (state, payload) => state.reviews.push(payload)
},
actions = {
  GET_REVIEWS: async ({ commit }, id) => {
    let response = await fetch('http://localhost:3000/reviews?productId='+ id)
    let data = await response.json()
    commit('SET_REVIEWS', data)
  },
  ADD_REVIEW: async ({commit}, review) => {
    let response = await fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(review)
    })
    let data = await response.json();
    commit('SET_NEW_REVIEW', data)
  }
}

export default {state, getters, mutations, actions}