import mock from '../mock';

import {
  zjlsList
} from '../data/live.js';

const _zjlsList = zjlsList;

/**
 * 获取资金流水列表
 * page 当前页
 * rows 多少条
 * type 0 借款 1 还款 2 全部
 */
mock.onPost('/CW000100').reply(config => {
  const {
    page,
    rows,
    type
  } = JSON.parse(config.data);

  let mockStock = []
  if (type === '2') {
    mockStock = _zjlsList
  } else {
    _zjlsList.forEach((item, index) => {
      item.type === type ? mockStock.push(item) : ''
    })
  }
  console.log(mockStock)
  const allTotal = mockStock.length;
  mockStock = mockStock.filter((u, index) => index < rows * page && index >= rows * (page - 1));
  return new Promise((resolve, reject) => {
    resolve([200, {
      allTotal: allTotal,
      data: mockStock
    }]);
  });
});
