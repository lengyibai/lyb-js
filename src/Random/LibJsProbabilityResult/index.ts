/** @description 百分比概率结果
 * @param probability 触发概率，百分比，0-100
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsProbabilityResult(50); //50% 概率为 true
 * libJsProbabilityResult(80); //80% 概率为 true
 * libJsProbabilityResult(100); //100% 概率为 true
 */
export const libJsProbabilityResult = (probability: number) =>
  Math.random() * 100 < probability;
