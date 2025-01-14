import Decimal from "decimal.js";
import { libJsNumComma } from './LibJsNumComma';

/** @description 将大于或等于单位组的属性值，则使用它的属性名作为单位，你甚至可以用中文键名
 * @param num 数字
 * @param units 单位组，key为单位，value为格式化阈值
 * @param retain 保留几位小数
 * @returns 数字+单位
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumberUnit-数字单位
 */
export const libJsNumberUnit = (
  num: number,
  units: Record<string, number>,
  retain = 0
) => {
  const decimalValue = new Decimal(num);
  const sortedUnits = Object.entries(units).sort(([, a], [, b]) => b - a);

  for (const [unit, threshold] of sortedUnits) {
    const decimalThreshold = new Decimal(threshold);
    if (decimalValue.greaterThanOrEqualTo(decimalThreshold)) {
      const formattedValue = decimalValue.dividedBy(decimalThreshold);
      const v = libJsNumComma(Number(formattedValue), retain);
      return v + unit;
    }
  }

  const v = libJsNumComma(Number(decimalValue), retain);
  return v;
};
