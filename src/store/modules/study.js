// 此为学习模块
/**
 * 注释中代码  a  代表每日一练
 */
import * as types from '../types.js'
import { setSesStorage } from '@/utils/storageUtil.js'

const state = {
  selectDate: '' // a 选中日期
}

const actions = {
  setSelectDate ({ commit }, boo) {
    commit(types.SET_SELECT_DATE, boo)
  }
}

const mutations = {
  'SET_SELECT_DATE' (state, boo) {
    state.selectDate = boo
    setSesStorage("STUDY_SELECT_DATE", boo)
  }
}

export default {
  state,
  mutations,
  actions
}
