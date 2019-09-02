// 学习模块 / 每日一练
import axios from 'axios'

// 获取每日一练数据
export const CW000200 = params => axios.post('/CW000200', params);

// 获取每日一练单个数据
export const CW000201 = params => axios.post('/CW000201', params);
