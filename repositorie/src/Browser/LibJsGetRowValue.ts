/** @description 按点路径获取对象值
 * @param row 数据对象
 * @param prop 点路径属性
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsGetRowValue-按点路径获取对象值
 */
export const libJsGetRowValue = (row: Record<string, any>, prop: string) => {
  return prop
    .split(".")
    .reduce<any>((currentValue, key) => currentValue?.[key], row);
};
