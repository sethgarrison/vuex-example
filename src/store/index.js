// import third party dependencies
import Vuex from 'vuex'
import Vue from 'vue'

// tell Vue that you will be using Vuex
Vue.use(Vuex)

// our state object - single source of truth for our application
const state = {
  count: 0
}

// our mutation constants which can be reused both internally and externally
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actions are typically used for asynchronous methods and aren't explicitly required
// in this example. the first argument of the methods is the context object which contain commit, dispatch, getters
// and other methods
const actions = {
  increment ({commit}) {
    commit(INCREMENT)
  },
  decrement ({commit}) {
    commit(DECREMENT)
  }
}

// mutations are how the state is modified
const mutations = {
  [DECREMENT] (state) {
    state.count--
  },
  [INCREMENT] (state) {
    state.count++
  }
}

// create the store instance
const store = new Vuex.Store({
  state,
  actions,
  mutations
})

// export our store so that the Vue application can leverage it
export default store
