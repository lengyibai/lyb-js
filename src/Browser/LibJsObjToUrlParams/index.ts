/** @description 将对象转为地址栏参数
 * @param params 对象参数
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsObjToUrlParams({ name: "John", age: 30, active: true });
 * // "name=John&age=30&active=true"
 */
export const libJsObjToUrlParams = (
  params: Record<string, string | number | boolean>
) => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
