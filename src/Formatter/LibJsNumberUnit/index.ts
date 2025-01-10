import Decimal from "decimal.js";

export interface LibJsNumberUnitParams {
  [unit: string]: number;
}

/** @description 将大于1000的数字使用k为单位
 * @param num 数字
 * @param units 单位组，key为单位，value为格式化阈值
 * @returns [数字, 单位]
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumberUnit-数字单位
 */
export const libJsNumberUnit = (num: number, units: LibJsNumberUnitParams) => {
  const decimalValue = new Decimal(num);
  const sortedUnits = Object.entries(units).sort(([, a], [, b]) => b - a);

  for (const [unit, threshold] of sortedUnits) {
    const decimalThreshold = new Decimal(threshold);
    if (decimalValue.greaterThanOrEqualTo(decimalThreshold)) {
      const formattedValue = decimalValue
        .dividedBy(decimalThreshold)
        .toFixed(2);
      return [formattedValue, unit];
    }
  }

  return [decimalValue.toFixed(2), ""];
};
