/** @description 随机 RGBA 颜色
 * @param alpha 透明度
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRandomColor-随机色
 */
export const libJsRandomColor = (alpha = 1) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
