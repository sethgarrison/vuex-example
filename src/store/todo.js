import {getTodos} from '@/api/todoService'
import {SHOW_MESSAGE, HIDE_MESSAGE} from './message'

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
    commit(SHOW_MESSAGE, 'LOADING TODOS')
    getTodos()
      .then(res => {
        commit(GOT_TODOS, res.data, {root: true})
        commit(HIDE_MESSAGE)
      })
  }
}

// mutations are how the state is modified
const mutations = {
  [GOT_TODOS] (state, data) {
    state.todos = [...data]
  }
}

export default {
  state,
  actions,
  mutations
}
