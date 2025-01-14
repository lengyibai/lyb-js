/**
 * @description 数字每三位添加逗号
 * @param num 需要格式化的数字
 * @param reserve 保留小数位数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumComma-数字逗号
 */
export const libJsNumComma = (num: number, reserve = 2) => {
  const str = num.toFixed(reserve).toString();
  const reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
};
