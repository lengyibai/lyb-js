/** @description 随机获取两个数之间的值，包含两数自身
 * @param min 最小值
 * @param max 最大值
 * @param num 保留小数位数
  * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsRandom(1, 10); //1 到 10 之间的随机整数
 * libJsRandom(1, 10, 2); //1 到 10 之间保留两位小数的随机数
 */
export const libJsRandom = (min: number, max: number, num = 0) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
};