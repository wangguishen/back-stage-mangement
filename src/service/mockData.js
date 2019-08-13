import axios from 'axios'

// 获取左侧导航栏数据
export const getLeftNavigation = params => axios.post('/sys/getLeftNavigation', params);

// 生活模块
// 获取资金流水列表
export const getCapitalBill = params => axios.post('/live/getCapitalBill', params);
