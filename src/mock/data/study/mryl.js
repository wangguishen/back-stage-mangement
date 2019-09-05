import Mock from 'mockjs';
const Random = Mock.Random;

/**
 * 获取每日一练数据
 * id         -->   唯一标识
 * title      -->   标题
 * data       -->   日期
 */
const mrylList = [
  {
    id: Random.increment().toString(),
    title: '扭动的蠕虫',
    date: '2019-09-02'
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    date: '2019-09-05'
  }
];

export {
  mrylList
}
