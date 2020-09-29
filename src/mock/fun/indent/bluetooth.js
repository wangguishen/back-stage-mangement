import mock from '../../mock';

import {
  bluetooth,
  expressList,
  paymentList
} from '../../data/indent/bluetooth.js';

const _bluetooth = bluetooth;
const _expressList = expressList;
const _paymentList = paymentList;

/**
 * 获取蓝牙耳机列表
 */
mock.onPost('/CW000300').reply(config => {
  const { page, rows, name, date, express, payment } = JSON.parse(config.data);
  let mockStock = _bluetooth

  mockStock = mockStock.filter((u, index) => index < rows * page && index >= rows * (page - 1));
  // name 筛选
  mockStock = name ? mockStock.filter((item, i) => item.name === name) : mockStock
  // date 筛选
  mockStock = date ? mockStock.filter((item, i) => item.ordersDate === date) : mockStock
  // express 筛选
  mockStock = express ? mockStock.filter((item, i) => item.express === express) : mockStock
  // payment 筛选
  mockStock = payment ? mockStock.filter((item, i) => item.payment === payment) : mockStock
  return new Promise((resolve, reject) => {
    const allTotal = mockStock.length;
    let res = {
      code: 0,
      data: {
        allTotal,
        data: mockStock
      },
      msg: '请求成功'
    }
    resolve([200, res]);
  });
});

/**
 * 获取快递公司列表
 */
mock.onPost('/CW000301').reply(config => {
  const mockStock = _expressList
  return new Promise((resolve, reject) => {
    let res = {
      code: 0,
      data: mockStock,
      msg: '请求成功'
    }
    resolve([200, res]);
  });
});

/**
 * 获取付款方式
 */
mock.onPost('/CW000302').reply(config => {
  const mockStock = _paymentList
  return new Promise((resolve, reject) => {
    let res = {
      code: 0,
      data: mockStock,
      msg: '请求成功'
    }
    resolve([200, res]);
  });
});
