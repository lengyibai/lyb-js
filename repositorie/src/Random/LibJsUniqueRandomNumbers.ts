/** @description 随机生成指定个数、指定范围不重复的随机数数组
 * @param min 最小值
 * @param max 最大值
 * @param count 数组长度
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsUniqueRandomNumbers-随机数数组
 */
export const libJsUniqueRandomNumbers = (
  min: number,
  max: number,
  count: number
) => {
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.slice(0, count);
};
