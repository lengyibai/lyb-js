/** @description 将数组打乱顺序
 * @param arr 需要乱序的数组
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const shuffled = libJsShuffleArray([1, 2, 3, 4, 5]);
 * console.log(shuffled); //[3, 5, 2, 1, 4] （结果每次不同）
 */
export const libJsShuffleArray = <T>(arr: T[]): T[] => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
