import Decimal from "decimal.js";

/**
 * @description 数字每三位添加逗号（不四舍五入）
 * @param num 需要格式化的数字
 * @param reserve 保留小数位数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumComma-数字逗号
 */
export const libJsNumComma = (num: number, reserve = 2) => {
  const decimal = new Decimal(num);
  // 截断小数，不四舍五入
  const str = decimal.toFixed(reserve, Decimal.ROUND_DOWN);
  const reg =
    str.includes(".") ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
};