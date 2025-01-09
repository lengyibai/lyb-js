/** @description 随机 RGBA 颜色
 * @param alpha 透明度
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsRandomColor(); //生成随机的 RGBA 颜色，默认透明度 1
 * libJsRandomColor(0.5); //生成随机的 RGBA 颜色，透明度为 0.5
 */
export const libJsRandomColor = (alpha = 1) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
