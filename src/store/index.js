// import third party dependencies
import Vuex from 'vuex'
import Vue from 'vue'

// tell Vue that you will be using Vuex
Vue.use(Vuex)

// our state object - single source of truth for our application
const state = {
  todos: [
    {id: 1, name: 'make asynchronous methods', isComplete: true},
    {id: 2, name: 'make code better', isComplete: false}
  ]
}

// our mutation constants which can be reused both internally and externally

// actions are typically used for asynchronous methods and aren't explicitly required
// in this example. the first argument of the methods is the context object which contain commit, dispatch, getters
// and other methods
const actions = {}

// mutations are how the state is modified
const mutations = {}

// create the store instance
const store = new Vuex.Store({
  state,
  actions,
  mutations
})

// export our store so that the Vue application can leverage it
export default store
