/** @description 值介于起点与终点之间时返回一个介于0与1之间的数
 * @param start 起点
 * @param end 终点
 * @param value 动态值
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNormalizeInRange-范围归一化
 */
export const LibJsNormalizeInRange = (
  start: number,
  end: number,
  value: number
) => {
  return Math.max(0, Math.min((start - value) / (start - end), 1));
};
