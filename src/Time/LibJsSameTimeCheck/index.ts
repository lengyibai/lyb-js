import dayjs from "dayjs";

/**
 * @description 传入时间戳与当前时间判断是否为同一分、同一时、同一天、同一周、同一月、同一年
 * @param timestamp 毫秒时间戳
 * @param unit 判断单位
 * @returns 0-同一单位时间 1-新单位时间 -1时间戳大于当前时间
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSameTimeCheck-时间比对
 */
export const libJsSameTimeCheck = (
  timestamp: number,
  unit: dayjs.OpUnitType
) => {
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
