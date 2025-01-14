/** @description 随机获取两个数之间的值，包含两数自身
 * @param min 最小值
 * @param max 最大值
 * @param num 保留小数位数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRandom-随机数
 */
export const libJsRandom = (min: number, max: number, num = 0) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
};
