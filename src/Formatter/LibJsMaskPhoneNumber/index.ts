/**
 * @description 隐藏手机号码中间的四位数字
 * @param mobile 需要处理的手机号码
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsMaskPhoneNumber-隐藏手机号码
 */
export const libJsMaskPhoneNumber = (mobile: number | string) => {
  const m = mobile.toString();
  return m.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};
