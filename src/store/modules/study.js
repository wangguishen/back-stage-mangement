// 此为学习模块
/**
 * 注释中代码  a  代表每日一练
 */
import * as types from '../types.js'
import { setSesStorage } from '@/utils/storageUtil.js'

const state = {
  studyList: [], // 学习数据
  selectDate: '' // a 选中日期
}

const actions = {
  setStudyList ({ commit }, boo) {
    commit(types.SET_STUDY_LIST, boo)
  },
  setSelectDate ({ commit }, boo) {
    commit(types.SET_SELECT_DATE, boo)
  }
}

const mutations = {
  'SET_STUDY_LIST' (state, boo) {
    state.studyList = boo
    setSesStorage("STUDY_LIST", boo)
  },
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
