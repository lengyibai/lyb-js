import dayjs from "dayjs";

/**
 * @description 传入时间戳与当前时间判断是否为同一分、同一时、同一天、同一周、同一月、同一年
 * @param timestamp 毫秒时间戳
 * @param unit 判断单位
 * @returns 0-同一单位时间 1-新单位时间 -1时间戳大于当前时间
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const timestamp = 1679872800000; //时间戳
 * const result = libSameTimeCheck(timestamp, 'day'); //判断是否为同一天
 * console.log(result); //0: 同一天, 1: 新的一天, -1: 时间戳大于当前时间
 */
export const libJsSameTimeCheck = (timestamp: number, unit: dayjs.OpUnitType) => {
  const inputTime = dayjs(timestamp).startOf(unit);
  const currentTime = dayjs().startOf(unit);

  if (inputTime.isSame(currentTime)) {
    return 0;
  } else if (inputTime.isBefore(currentTime)) {
    return 1;
  } else {
    return -1;
  }
};
