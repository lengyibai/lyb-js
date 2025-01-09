/**
 * @description 隐藏手机号码中间的四位数字
 * @param mobile 需要处理的手机号码
  * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const masked = libJsMaskPhoneNumber("13812345678");
 * console.log(masked); //138****5678
 */
export const libJsMaskPhoneNumber = (mobile: number | string) => {
  const m = mobile.toString();
  return m.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}