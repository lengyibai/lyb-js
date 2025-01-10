/** @description 将数组打乱顺序
 * @param arr 需要乱序的数组
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsShuffleArray-数组乱序
 */
export const libJsShuffleArray = <T>(arr: T[]): T[] => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
