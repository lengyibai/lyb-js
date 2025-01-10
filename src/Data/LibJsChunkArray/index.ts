/**
 * @description 将数组拆分成指定数组元素数量的多个数组
 * @param arr 需要拆分的数组
 * @param chunkSize 每个数组的元素数量
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsChunkArray-数组拆分
 */
export const libJsChunkArray = <T>(arr: T[], chunkSize: number) => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
