import axios from '@/utils/request.js'
const Avatar = {
  key: '5e311eba9d3644cc92216733d5461dad'
}
const AvatarUrl = 'http://api.avatardata.cn'


// 快递公司查询
// export const CW100000 = params => axios.post(`${AvatarUrl}/ExpressNumber/Company`, Object.assign(Avatar, params));
export const CW100000 = params => axios.post(`http://api.avatardata.cn/ExpressNumber/Company`, params);

// 快递查询
export const CW100001 = params => axios.post(`${AvatarUrl}/ExpressNumber/Lookup`, Object.assign(Avatar, params));

