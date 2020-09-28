import mock from '../../mock';

import {
  mrylList
} from '../../data/study/mryl.js';

const _mrylList = mrylList;

/**
 * 获取每日一练数据
 */
mock.onPost('/CW000200').reply(config => {
  const {
    page,
    rows
  } = JSON.parse(config.data);
  let mockStock = _mrylList
  const allTotal = mockStock.length;

  mockStock = mockStock.filter((u, index) => index < rows * page && index >= rows * (page - 1));
  return new Promise((resolve, reject) => {
    resolve([200, {
      allTotal,
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
  console.log(title)
  _mrylList.forEach((item, index) => {
    if (title && title !== '' && title === item.title) {
      mockStock = item
    } else if (date && date !== '' && date === `${item.year}-${item.month}-${item.day}`) {
      mockStock = item
    }
  })
  return new Promise((resolve, reject) => {
    resolve([200, {
      data: mockStock
    }]);
  });
});

