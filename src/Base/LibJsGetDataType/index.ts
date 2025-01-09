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
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsGetDataType(123); //"number"
 * libJsGetDataType("hello"); //"string"
 * libJsGetDataType([1, 2, 3]); //"array"
 */
export const libJsGetDataType = (v: any): LibJsGetDataTypeReturnType => {
  return Object.prototype.toString
    .call(v)
    .substring(8)
    .replace(/]/g, "")
    .toLowerCase() as LibJsGetDataTypeReturnType;
};
