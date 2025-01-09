/** @description 时间差计算
 * @param timestamp 毫秒时间戳
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsTimeAgotamp(Date.now() - 3600000); //"1 小时前"
 * libJsTimeAgotamp(Date.now() - 86400000); //"1 天前"
 * libJsTimeAgotamp(Date.now() - 31536000000); //"1 年前"
 * libJsTimeAgotamp(Date.now() - 10000); //"刚刚"
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

  const currentTime = Date.now();
  const timeDifference = currentTime - timestamp;

  for (const { unit, milliseconds } of timeUnits) {
    if (timeDifference >= milliseconds) {
      const count = Math.floor(timeDifference / milliseconds);
      return `${count} ${unit}前`;
    }
  }

  return "刚刚";
};
