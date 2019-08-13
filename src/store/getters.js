import { getSesStorage } from '@/utils/storageUtil'

const getters = {
  getScreenWidth: state => { // 获取屏幕的宽度
    return state.common.screenWidth
  },
  getScreenHeight: state => { // 获取屏幕的高度
    return state.common.screenHeight
  },
  getIsCollapse: state => { // 获取左侧栏是否隐藏
    return state.basic.isCollapse
  },
  getCrumbsNum: state => { // 获取头部导航位置
    const status = getSesStorage('CRUMBS_NUM')
    if (status) {
      state.basic.crumbsNum = status
    }
    return state.basic.crumbsNum
  },
  getCrumbsList: state => { // 获取头部导航列表
    const status = getSesStorage('CRUMBS_LIST', 'json')
    if (status) {
      state.basic.crumbsList = status
    }
    return state.basic.crumbsList
  },
  getCurrentCrumbs: state => { // 当前头部导航
    const status = getSesStorage('CURRENT_CRUMBS', 'json')
    if (status) {
      state.basic.currentCrumbs = status
    }
    return state.basic.currentCrumbs
  }
}

export default getters
