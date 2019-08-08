import * as types from '../types.js'

const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight

const state = {
  screenWidth: clientWidth, // 屏幕的宽度
  screenHeight: clientHeight // 屏幕的高度
}

const actions = {
  setScreenWidth ({ commit }, boo) {
    commit(types.SET_SCREEN_WIDTH, boo)
  },
  setScreenHeight ({ commit }, boo) {
    commit(types.SET_SCREEN_HEIGHT, boo)
  }
}

const mutations = {
  'SET_SCREEN_WIDTH' (state, boo) {
    state.screenWidth = boo
  },
  'SET_SCREEN_HEIGHT' (state, boo) {
    state.screenHeight = boo
  }
}

export default {
  state,
  mutations,
  actions
}
