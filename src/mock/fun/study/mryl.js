import mock from '../../mock';

import {
  mrylList
} from '../../data/study/mryl.js';

const _mrylList = mrylList;

/**
 * 获取每日一练数据
 */
mock.onPost('/CW000200').reply(config => {
  const mockStock = _mrylList
  return new Promise((resolve, reject) => {
    resolve([200, {
      data: mockStock
    }]);
  });
});

/**
 * 获取每日一练单个数据
 */
mock.onPost('/CW000201').reply(config => {
  const {
    title,
    date
  } = JSON.parse(config.data);

  let mockStock = {}
  console.log(_mrylList)
  _mrylList.forEach((item, index) => {
    console.log(item)
    console.log(title)
    console.log(date)
    if (title && title !== '' && title === item.title) {
      mockStock = item
    } else if (date && date !== '' && date === item.date) {
      mockStock = item
    }
  })
  console.log(mockStock)
  return new Promise((resolve, reject) => {
    resolve([200, {
      data: mockStock
    }]);
  });
});

