/** @description 翻转指定索引后面的数组
 * @param arr 数组
 * @param index 开始索引
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libReverseArrayFromIndex([1, 2, 3, 4, 5], 1);
 * // [1, 2, 5, 4, 3]
 */
export const libReverseArrayFromIndex = <T>(arr: T[], index: number): T[] => {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  const subArray = arr.slice(index + 1).reverse();
  return [...arr.slice(0, index + 1), ...subArray];
};
