/** @description 计算两点距离
 * @param coord1 起点坐标
 * @param coord2 终点坐标
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsCoordsDistance({ x: 0, y: 0 }, { x: 3, y: 4 }); //5
 * libJsCoordsDistance({ x: 1, y: 1 }, { x: 4, y: 5 }); //5
 * libJsCoordsDistance({ x: 0, y: 0 }, { x: 0, y: 0 }); //0
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
