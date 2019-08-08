import * as types from '../types.js'

const state = {
  isCollapse: false // 左侧导航菜单是否显示  true --> 隐藏  false --> 显示
}

const actions = {
  setIsCollapse ({ commit }, boo) {
    commit(types.SET_IS_COLLAPSE, boo)
  }
}

const mutations = {
  'SET_IS_COLLAPSE' (state, boo) {
    state.isCollapse = boo
  }
}

export default {
  state,
  mutations,
  actions
}
