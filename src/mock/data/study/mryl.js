import Mock from 'mockjs';
const Random = Mock.Random;

/**
 * 获取每日一练数据
 * id         -->   唯一标识
 * title      -->   标题
 * year       -->   年
 * month      -->   月
 * day        -->   日
 * data       -->   日期（模块文件名）
 * routerName -->   模块名称（模块name）
 * bgColor    -->   模块默认背景色
 */
const mrylList = [
  {
    id: Random.increment().toString(),
    title: '愤怒小鸟 -- 红火',
    year: '2019',
    month: '09',
    day: '01',
    // date: '2019-09-01',
    // routerName: 'my20190901',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '扭动的蠕虫',
    year: '2019',
    month: '09',
    day: '02',
    // date: '2019-09-02',
    // routerName: 'my20190902',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '抽象的小鸟',
    year: '2019',
    month: '09',
    day: '03',
    // date: '2019-09-03',
    // routerName: 'my20190903',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '2019-09-04',
    year: '2019',
    month: '09',
    day: '04',
    // date: '2019-09-04',
    // routerName: 'my20190904',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '05',
    // date: '2019-09-05',
    // routerName: 'my20190905',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '06',
    // date: '2019-09-06',
    // routerName: 'my20190906',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '07',
    // date: '2019-09-07',
    // routerName: 'my20190907',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '08',
    // date: '2019-09-08',
    // routerName: 'my20190908',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '09',
    // date: '2019-09-09',
    // routerName: 'my20190909',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '10',
    // date: '2019-09-10',
    // routerName: 'my20190910',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '11',
    // date: '2019-09-11',
    // routerName: 'my20190911',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '12',
    // date: '2019-09-12',
    // routerName: 'my20190912',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '13',
    // date: '2019-09-13',
    // routerName: 'my20190913',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '14',
    // date: '2019-09-14',
    // routerName: 'my20190914',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '15',
    // date: '2019-09-15',
    // routerName: 'my20190915',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '16',
    // date: '2019-09-16',
    // routerName: 'my20190916',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '17',
    // date: '2019-09-17',
    // routerName: 'my20190917',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '飞车加载动画',
    year: '2019',
    month: '09',
    day: '18',
    // date: '2019-09-18',
    // routerName: 'my20190918',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '女神来了，快让路',
    year: '2019',
    month: '09',
    day: '19',
    // date: '2019-09-19',
    // routerName: 'my20190919',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '20',
    // date: '2019-09-20',
    // routerName: 'my20190920',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '21',
    // date: '2019-09-21',
    // routerName: 'my20190921',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '22',
    // date: '2019-09-22',
    // routerName: 'my20190922',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '集体舞动画催眠',
    year: '2019',
    month: '09',
    day: '23',
    // date: '2019-09-23',
    // routerName: 'my20190923',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '旋转的太极',
    year: '2019',
    month: '09',
    day: '24',
    // date: '2019-09-24',
    // routerName: 'my20190924',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '情侣亲吻',
    year: '2019',
    month: '09',
    day: '25',
    // date: '2019-09-25',
    // routerName: 'my20190925',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '情侣亲吻',
    year: '2019',
    month: '09',
    day: '26',
    // date: '2019-09-26',
    // routerName: 'my20190926',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '情侣亲吻',
    year: '2019',
    month: '09',
    day: '27',
    // date: '2019-09-27',
    // routerName: 'my20190927',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '情侣亲吻',
    year: '2019',
    month: '09',
    day: '28',
    // date: '2019-09-28',
    // routerName: 'my20190928',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '抽象的小鸟',
    year: '2019',
    month: '09',
    day: '29',
    // date: '2019-09-29',
    // routerName: 'my20190929',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '情侣亲吻',
    year: '2019',
    month: '09',
    day: '30',
    // date: '2019-09-30',
    // routerName: 'my20190930',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '01',
    // date: '2019-10-01',
    // routerName: 'my20191001',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '02',
    // date: '2019-10-02',
    // routerName: 'my20191002',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '03',
    // date: '2019-10-03',
    // routerName: 'my20191003',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '04',
    // date: '2019-10-04',
    // routerName: 'my20191004',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '05',
    // date: '2019-10-05',
    // routerName: 'my20191005',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '06',
    // date: '2019-10-06',
    // routerName: 'my20191006',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: 'xxx',
    year: '2019',
    month: '10',
    day: '07',
    // date: '2019-10-07',
    // routerName: 'my20191007',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '45°折角 -- 透明',
    year: '2019',
    month: '10',
    day: '08',
    // date: '2019-10-08',
    // routerName: 'my20191008',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '45°折角 -- 指定背景',
    year: '2019',
    month: '10',
    day: '09',
    // date: '2019-10-09',
    // routerName: 'my20191009',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '其他角度折角 -- 无圆角',
    year: '2019',
    month: '10',
    day: '10',
    // date: '2019-10-10',
    // routerName: 'my20191010',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '其他角度折角 -- 有圆角',
    year: '2019',
    month: '10',
    day: '11',
    // date: '2019-10-11',
    // routerName: 'my20191011',
    bgColor: Random.color()
  }, {
    id: Random.increment().toString(),
    title: '边框折角',
    year: '2019',
    month: '10',
    day: '12',
    bgColor: Random.color()
  }
];

export {
  mrylList
}
