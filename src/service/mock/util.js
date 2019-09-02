// 公共接口调用
import axios from 'axios'

// 获取左侧导航栏数据
export const CW000001 = params => axios.post('/CW000001', params);
