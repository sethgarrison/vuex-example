export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'

const state = {
  msg: ''
}

const mutations = {
  [SHOW_MESSAGE] (state, msg) {
    state.msg = msg
  },
  [HIDE_MESSAGE] (state) {
    state.msg = ''
  }
}

export default {
  state,
  mutations
}
