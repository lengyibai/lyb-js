import { Decimal } from "decimal.js";
import { libJsNumComma } from "./LibJsNumComma.js";

/** @description 将大于或等于单位组属性值的数值，格式化为对应单位 */
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
      return `${libJsNumComma(Number(formattedValue), retain)}${unit}`;
    }
  }

  return libJsNumComma(Number(decimalValue), retain);
};
