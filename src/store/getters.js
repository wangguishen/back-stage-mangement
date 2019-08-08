// import { getSesStorage } from '@/utils/storageUtil'

const getters = {
  getScreenWidth: state => { // 获取屏幕的宽度
    return state.common.screenWidth
  },
  getScreenHeight: state => { // 获取屏幕的高度
    return state.common.screenHeight
  },
  getIsCollapse: state => { // 获取左侧栏是否隐藏
    return state.basic.isCollapse
  }
}

export default getters
