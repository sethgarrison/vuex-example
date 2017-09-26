// import third party dependencies
import Vuex from 'vuex'
import Vue from 'vue'
import {getTodos} from '@/api/todoService'

// tell Vue that you will be using Vuex
Vue.use(Vuex)

// our state object - single source of truth for our application
const state = {
  todos: []
}

// our mutation constants which can be reused both internally and externally
export const GOT_TODOS = 'GOT_TODOS'

// actions are typically used for asynchronous methods and aren't explicitly required
// in this example. the first argument of the methods is the context object which contain commit, dispatch, getters
// and other methods
const actions = {
  fetchTodos ({commit}) {
    getTodos()
      .then(res => commit(GOT_TODOS, res.data))
  }
}

// mutations are how the state is modified
const mutations = {
  [GOT_TODOS] (state, data) {
    state.todos = [...data]
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
