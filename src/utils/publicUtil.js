/**
 * 此文件为公共js方法文件
 * wgs 2019.06.05
 */

/* 把对象转化为formData表单格式 */
export const formUtil = (obj) => {
  const formData = new FormData()
  if (Object.keys(obj).length === 0) { return formData }
  for (const key in obj) {
    formData.append(key, obj[key])
  }
  return formData
}

/* 阿凡达key值加入 */
export const aFanDa = (obj) => {
  const key = '5e311eba9d3644cc92216733d5461dad'
  return obj
}
