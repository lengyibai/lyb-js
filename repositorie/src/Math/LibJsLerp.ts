/** @description 线性插值
 * @param start 当 value = 0 时，返回 start
 * @param end 当 value = 1 时，返回 end
 * @param value 插值比例，取值范围 0~1
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsLerp-线性插值
 */
export const LibJsLerp = (start: number, end: number, value: number) => {
  const t = Math.min(Math.max(value, 0), 1);
  return start * (1 - t) + end * t;
};
