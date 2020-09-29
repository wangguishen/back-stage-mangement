/**
 * id          唯一标识
 * type        类型  -->  0 借款 1 还款
 * sum         金额
 * name        拥有者
 * load_name   借款人
 * repay_name  还款人
 * load_date   借款日期
 * repay_date  还款日期
 * desc        原因
 */

const bluetooth = [
  {
    "id": 1,
    "name": '张三',
    "tel": 18888888888,
    "address": '河南省商丘市民权县程庄镇彭庄村',
    "ejType": '0', // 耳机类型 0 二代 1 三代
    "price": 218, // 售价
    "costPrice": 100, // 耳机成本价
    "netIncome": 118, // 纯收入
    "payment": '0', // 付款方式 0 淘宝 1 微信 2 支付宝 3 拼多多
    "freight": 5, // 运费
    "express": '1', // 快递公司 1 韵达 2 顺丰 3 中通 4 圆通 5 申通
    "EMS": '430000000000', // 快递单号
    "referrer": '李四', // 推荐人
    "cargoCase": '0', // 货物情况 0 正常  1  换货  2  退货
    "ordersDate": '2020-09-29', // 下单日期
    "gift": "0", // 赠品 0 无 1 耳机壳 2 手机壳
    "giftPrice": 0, // 赠品价格
    "desc": '' // 备注
  }
]

/**
 * 快递公司详情
 */
const expressList = [
  {
    lable: '韵达快递',
    value: '1'
  }, {
    lable: '顺丰快递',
    value: '2'
  }, {
    lable: '中通快递',
    value: '3'
  }, {
    lable: '圆通快递',
    value: '4'
  }, {
    lable: '申通快递',
    value: '5'
  }
]

/**
 * 付款方式
 */
const paymentList = [
  {
    lable: '淘宝',
    value: '0'
  }, {
    lable: '微信',
    value: '1'
  }, {
    lable: '支付宝',
    value: '2'
  }, {
    lable: '拼多多',
    value: '3'
  }
]

export {
  bluetooth,
  expressList,
  paymentList
}