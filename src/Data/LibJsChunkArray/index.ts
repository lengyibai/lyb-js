/**
 * @description 将数组拆分成指定数组元素数量的多个数组
 * @param arr 需要拆分的数组
 * @param chunkSize 每个数组的元素数量
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const chunks = libJsChunkArray([1, 2, 3, 4, 5, 6], 2);
 * console.log(chunks); //[[1, 2], [3, 4], [5, 6]]
 */
export const libJsChunkArray = <T>(arr: T[], chunkSize: number) => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
