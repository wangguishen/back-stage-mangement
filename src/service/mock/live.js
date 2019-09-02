// 生活模块
import axios from 'axios'

// 获取资金流水列表
export const CW000100 = params => axios.post('/CW000100', params);
