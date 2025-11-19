/**
 * @description 将中间四位设置为星号
 * @param str 需要处理的手机号码
 */
export const libJsMaskCenterFour = (str: number | string) => {
  const m = str.toString();
  const len = m.length;
  const start = Math.floor((len - 4) / 2); // 中间四位起点
  return m.slice(0, start) + "****" + m.slice(start + 4);
};
