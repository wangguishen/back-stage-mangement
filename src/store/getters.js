// import { getSesStorage } from '@/utils/storageUtil'

const getters = {
  getCeshi: state => {
    return state.common.ceshi
  },
  getScreenWidth: state => { // 获取屏幕的宽度
    return state.common.screenWidth
  },
  getScreenHeight: state => { // 获取屏幕的高度
    return state.common.screenHeight
  }
}

export default getters
