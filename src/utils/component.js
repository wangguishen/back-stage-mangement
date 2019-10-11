// 学习模块 组件接口重新封装  import引入模块以及声明components对象生成
import { getSesStorage } from '@/utils/storageUtil.js'
const studyList = getSesStorage('STUDY_LIST', 'json')

let component = {}
studyList.forEach(item => {
  let routerName = `my${item.year}${item.month}${item.day}`
  component[routerName] = () => import(`@/components/study/one-day-one-exercise/${item.year}-${item.month}/${item.year}-${item.month}-${item.day}`)
})

export default component
