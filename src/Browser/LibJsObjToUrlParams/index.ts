/** @description 将对象转为地址栏参数
 * @param params 对象参数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsObjToUrlParams-对象转Url参数
 */
export const libJsObjToUrlParams = (
  params: Record<string, string | number | boolean>
) => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
