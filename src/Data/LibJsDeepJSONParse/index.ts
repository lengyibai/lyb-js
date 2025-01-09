/** @description 递归将JSON字符串深度解析为对象
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const obj = libJsDeepJSONParse('{"a": 1, "b": "{\"c\": 2}"}');
 * console.log(obj); //{ a: 1, b: { c: 2 } }
 */
export const libJsDeepJSONParse = <T>(data: any): T => {
  //检查是否为字符串并尝试解析
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data);
      //递归解析解析后的结果
      return libJsDeepJSONParse(parsed);
    } catch {
      //如果解析失败，返回原始字符串
      return data as T;
    }
  }

  //如果是数组，递归处理每个元素
  if (Array.isArray(data)) {
    return data.map((item) => libJsDeepJSONParse(item)) as T;
  }

  //如果是对象，递归处理每个属性值
  if (data !== null && typeof data === "object") {
    return Object.keys(data).reduce((acc: Record<string, any>, key) => {
      acc[key] = libJsDeepJSONParse(data[key]);
      return acc;
    }, {}) as T;
  }

  //其他情况返回原始值
  return data;
};
