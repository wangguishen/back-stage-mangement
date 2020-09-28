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
    "address": '河南省商丘市民权县程庄镇彭庄村',
    "ej-type": '0', // 耳机类型 0 二代 1 三代
    "price": 218, // 售价
    "cost-price": 93, // 耳机成本价
    "net-income": 100, // 纯收入
    "freight": 5, // 运费
    "express": 1, // 快递公司 1 韵达 2 顺丰 3 中通 4 圆通 5 申通
    "EMS": '430000000000', // 快递单号
    "referrer": '李四', // 推荐人
    "cargo-case": 0, // 货物情况 0 正常  1  换货  2  退货
    "orders-date": '2020-09-29', // 下单日期
    "gift": "0", // 赠品 0 无 1 手机壳 2 耳机壳
    "gift-price": 0 // 赠品价格
  }
]

export {
  bluetooth
}