import { setSesStorage } from '@/utils/storageUtil.js'
import * as types from '../types.js'

const state = {
  isCollapse: false, // 左侧导航菜单是否显示  true --> 隐藏  false --> 显示
  crumbsNum: '/', // 头部导航位置,
  currentCrumbs: { id: '1', path: '/', name: '首页' }, // 当前头部导航
  crumbsList: [{ id: '1', path: '/', name: '首页' }] // 头部列表
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
  },
  setCurrentCrumbs ({ commit }, boo) {
    commit(types.SET_CURRENT_CRUMBS, boo)
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
  },
  'SET_CURRENT_CRUMBS' (state, boo) {
    state.currentCrumbs = boo
    setSesStorage("CURRENT_CRUMBS", boo)
  }
}

export default {
  state,
  mutations,
  actions
}
