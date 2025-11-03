/** @description 时间差计算（支持未来时间：多久后）
 * @param timestamp 毫秒时间戳
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsTimeAgo-中文时间差
 */
export const libJsTimeAgo = (timestamp: number) => {
  const timeUnits = [
    { unit: "年", milliseconds: 365 * 24 * 60 * 60 * 1000 },
    { unit: "月", milliseconds: 30 * 24 * 60 * 60 * 1000 },
    { unit: "周", milliseconds: 7 * 24 * 60 * 60 * 1000 },
    { unit: "天", milliseconds: 24 * 60 * 60 * 1000 },
    { unit: "小时", milliseconds: 60 * 60 * 1000 },
    { unit: "分钟", milliseconds: 60 * 1000 },
  ];

  const now = Date.now();
  const diff = timestamp - now;
  const absDiff = Math.abs(diff);

  for (const { unit, milliseconds } of timeUnits) {
    if (absDiff >= milliseconds) {
      const count = Math.floor(absDiff / milliseconds);
      return diff > 0 ? `${count} ${unit}后` : `${count} ${unit}前`;
    }
  }

  return "刚刚";
};
