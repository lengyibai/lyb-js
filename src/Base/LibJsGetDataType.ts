export type LibJsGetDataTypeReturnType =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "function"
  | "object";

/**
 * @description 返回数据类型
 * @param v 需要判断类型的数据
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsColorConsole-有色打印
 */
export const libJsGetDataType = (v: any): LibJsGetDataTypeReturnType => {
  return Object.prototype.toString
    .call(v)
    .substring(8)
    .replace(/]/g, "")
    .toLowerCase() as LibJsGetDataTypeReturnType;
};
