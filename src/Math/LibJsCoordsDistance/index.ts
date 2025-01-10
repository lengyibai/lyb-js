/** @description 计算两点距离
 * @param coord1 起点坐标
 * @param coord2 终点坐标
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsCoordsDistance-两点距离
 */
export const libJsCoordsDistance = (
  coord1: { x: number; y: number },
  coord2: { x: number; y: number }
) => {
  //计算两个坐标之间的水平和垂直距离
  const deltaX = coord2.x - coord1.x;
  const deltaY = coord2.y - coord1.y;

  //使用勾股定理计算两点之间的距离
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  return distance;
};
