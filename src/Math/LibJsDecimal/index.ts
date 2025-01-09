import { Decimal } from "decimal.js";

/** @description 计算两个数的运算结果，并保留指定位数的小数
 * @param num1 第一个数
 * @param num2 第二个数
 * @param operator 运算符，支持加减乘除
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsDecimal(10, 3, "+"); //13
 * libJsDecimal(10, 3, "-"); //7
 * libJsDecimal(10, 3, "/", 2); //3.33
 */
export const libJsDecimal = (
  num1: number,
  num2: number,
  operator: "+" | "-" | "*" | "/",
  point = 2
) => {
  const calc: Record<string, (a: Decimal, b: Decimal) => Decimal> = {
    "+": (a, b) => a.add(b),
    "-": (a, b) => a.sub(b),
    "*": (a, b) => a.mul(b),
    "/": (a, b) => {
      if (b.eq(0)) {
        throw new Error("除数不能为0");
      }
      return a.div(b);
    },
  };

  const result = calc[operator](new Decimal(num1), new Decimal(num2));
  return Number(result.toFixed(point));
};
