import { Decimal } from "decimal.js";

/** @description 数字每三位添加逗号，不四舍五入 */
export const libJsNumComma = (num: number, reserve = 2) => {
  const decimal = new Decimal(num);
  const str = decimal.toFixed(reserve, Decimal.ROUND_DOWN);
  const reg =
    str.includes(".") ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;

  return str.replace(reg, "$1,");
};
