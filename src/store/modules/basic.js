import { setSesStorage } from '@/utils/storageUtil.js'
import * as types from '../types.js'

const state = {
  isCollapse: false, // 左侧导航菜单是否显示  true --> 隐藏  false --> 显示
  crumbsNum: '0', // 头部导航位置,
  crumbsList: [] // 头部列表
}

const actions = {
  setIsCollapse ({ commit }, boo) {
    commit(types.SET_IS_COLLAPSE, boo)
  },
  setCrumbsNum ({ commit }, boo) {
    commit(types.SET_CRUMBS_NUM, boo)
  },
  setCrumbsList ({ commit }, boo) {
    commit(types.SET_CRUMBS_LIST, boo)
  }
}

const mutations = {
  'SET_IS_COLLAPSE' (state, boo) {
    state.isCollapse = boo
  },
  'SET_CRUMBS_NUM' (state, boo) {
    state.crumbsNum = boo
    setSesStorage("CRUMBS_NUM", boo)
  },
  'SET_CRUMBS_LIST' (state, boo) {
    state.crumbsList = boo
    setSesStorage("CRUMBS_LIST", boo)
  }
}

export default {
  state,
  mutations,
  actions
}
