// import third party dependencies
import Vuex from 'vuex'
import Vue from 'vue'
import todo from './todo'
import message from './message'

// tell Vue that you will be using Vuex
Vue.use(Vuex)

// create the store instance
const store = new Vuex.Store({
  modules: {
    todo: todo,
    message: message
  }
})

// export our store so that the Vue application can leverage it
export default store
