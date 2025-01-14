/** @description 百分比概率结果
 * @param probability 触发概率，百分比，0-100
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsProbabilityResult-概率触发
 */
export const libJsProbabilityResult = (probability: number) =>
  Math.random() * 100 < probability;
