/** @description 递归将JSON字符串深度解析为对象（安全版，支持循环引用检测）
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsDeepJSONParse-深度解析JSON
 */
export const libJsDeepJSONParse = <T>(data: any, seen = new WeakSet()): T => {
  // 检查是否为字符串并尝试解析（仅在可能是JSON时才解析）
  if (typeof data === "string" && /^[\[{]/.test(data.trim())) {
    try {
      const parsed = JSON.parse(data);
      return libJsDeepJSONParse(parsed, seen);
    } catch {
      return data as T;
    }
  }

  // 循环引用检测
  if (data !== null && typeof data === "object") {
    if (seen.has(data)) return data as T;
    seen.add(data);
  }

  // 如果是数组，递归处理每个元素
  if (Array.isArray(data)) {
    return data.map((item) => libJsDeepJSONParse(item, seen)) as T;
  }

  // 如果是对象，递归处理每个属性值
  if (data !== null && typeof data === "object") {
    return Object.entries(data).reduce(
      (acc: Record<string, any>, [key, value]) => {
        acc[key] = libJsDeepJSONParse(value, seen);
        return acc;
      },
      {}
    ) as T;
  }

  // 其他情况返回原始值
  return data;
};
