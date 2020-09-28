import mock from '../../mock';

import {
  bluetooth
} from '../../data/indent/bluetooth.js';

const _bluetooth = bluetooth;

/**
 * 获取蓝牙耳机列表
 */
mock.onPost('/CW000300').reply(config => {
  const {
    page,
    rows
  } = JSON.parse(config.data);
  let mockStock = _bluetooth
  const allTotal = mockStock.length;

  mockStock = mockStock.filter((u, index) => index < rows * page && index >= rows * (page - 1));
  return new Promise((resolve, reject) => {
    resolve([200, {
      allTotal,
      data: mockStock
    }]);
  });
});
