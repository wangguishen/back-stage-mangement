// 订单模块
import axios from 'axios'

// 获取耳机订单列表
export const CW000300 = params => axios.post('/CW000300', params);

// 获取快递公司列表
export const CW000301 = params => axios.post('/CW000301', params);

// 获取付款方式
export const CW000302 = params => axios.post('/CW000302', params);
