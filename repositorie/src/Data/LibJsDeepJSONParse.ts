/** @description 递归将JSON字符串深度解析为对象
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsDeepJSONParse-深度解析JSON
 */
export const libJsDeepJSONParse = (data: any): any => {
  // 检查是否为字符串并尝试解析
  if (typeof data === "string") {
    const trimmed = data.trim();
    // 仅当字符串看起来是对象或数组时才尝试解析
    if (
      (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))
    ) {
      try {
        return libJsDeepJSONParse(JSON.parse(trimmed));
      } catch {
        return data; // 如果解析失败，返回原始字符串
      }
    }
    return data; // 非 JSON 字符串直接返回
  }

  // 如果是数组，递归处理每个元素
  if (Array.isArray(data)) {
    return data.map((item) => libJsDeepJSONParse(item));
  }

  // 如果是对象，递归处理每个属性值
  if (data !== null && typeof data === "object") {
    return Object.keys(data).reduce<Record<string, any>>((acc, key) => {
      acc[key] = libJsDeepJSONParse(data[key]);
      return acc;
    }, {});
  }

  // 其他情况返回原始值
  return data;
};
