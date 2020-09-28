// import { getAllIcon } from '@/utils/icon'
import Mock from 'mockjs';
const Random = Mock.Random;

// const leftList = ['']

const asideList = [
  Mock.mock({
    id: Random.increment().toString(),
    title: '首页',
    icon: "el-icon-star-on",
    path: '/'
  }), Mock.mock({
    id: Random.increment().toString(),
    title: '生活',
    icon: "el-icon-s-goods",
    children: [
      Mock.mock({
        id: Random.increment().toString(),
        title: '资金流水',
        icon: "el-icon-s-ticket",
        path: '/live/zjls'
      })
    ]
  }), Mock.mock({
    id: Random.increment().toString(),
    title: '学习',
    icon: "el-icon-s-open",
    children: [
      Mock.mock({
        id: Random.increment().toString(),
        title: '每日一练',
        icon: "el-icon-s-claim",
        path: '/study/mryl'
      })
    ]
  }), Mock.mock({
    id: Random.increment().toString(),
    title: '订单',
    icon: "el-icon-goods",
    children: [
      Mock.mock({
        id: Random.increment().toString(),
        title: '蓝牙耳机订单',
        icon: "el-icon-service",
        path: '/indent/bluetooth'
      })
    ]
  })
];

// 左侧栏数据
// for (let i = 0; i < 5; i++) {
//   asideList.push(Mock.mock({
//     id: Random.guid(),
//     "icon|1": getAllIcon(),
//     "title|1": Random.cname()
//   }))
// }

export {
  asideList
}
