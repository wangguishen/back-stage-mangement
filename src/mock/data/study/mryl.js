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
    title: '愤怒小鸟 -- 红火',
    date: '2019-09-01',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '扭动的蠕虫',
    date: '2019-09-02',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    date: '2019-09-05',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '飞车加载动画',
    date: '2019-09-18',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '女神来了，快让路',
    date: '2019-09-19',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    date: '2019-09-20',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    date: '2019-09-21',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    date: '2019-09-22',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    date: '2019-09-23',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '旋转的太极',
    date: '2019-09-24',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '情侣亲吻',
    date: '2019-09-25',
    bgColor: Random.color()
  }
];

export {
  mrylList
}
