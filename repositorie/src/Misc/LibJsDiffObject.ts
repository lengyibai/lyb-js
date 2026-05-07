/** @description 筛出已修改的值 */
/**
 * @description 深度对比对象差异（只返回新对象中发生变更的字段）
 * - 基础类型：值不同则返回新值
 * - 对象：递归 diff
 * - 数组：不做 diff，值不同直接返回新数组
 */
export const libDiffObject = <T extends Record<string, any>>(oldObj: T, newObj: T) => {
  const result: Partial<Record<keyof T, any>> = {};

  const isObject = (val: any) => val !== null && typeof val === "object" && !Array.isArray(val);

  Object.keys(newObj).forEach((key) => {
    const oldVal = oldObj?.[key];
    const newVal = newObj[key];

    // 数组：不递归，值不同直接返回
    if (Array.isArray(newVal)) {
      if (!Array.isArray(oldVal) || oldVal.length !== newVal.length) {
        (result as any)[key] = newVal;
        return;
      }

      const changed = newVal.some((item, index) => {
        const oldItem = oldVal[index];

        // 对象递归
        if (item && typeof item === "object" && !Array.isArray(item)) {
          return Object.keys(libDiffObject(oldItem || {}, item)).length > 0;
        }

        // 基础类型
        return oldItem !== item;
      });

      if (changed) {
        (result as any)[key] = newVal;
      }

      return;
    }

    // 对象：递归 diff
    if (isObject(newVal)) {
      const childDiff = libDiffObject(oldVal || {}, newVal);
      if (Object.keys(childDiff).length > 0) {
        result[key as keyof T] = childDiff as T[keyof T];
      }
      return;
    }

    // 基础类型
    if (oldVal !== newVal) {
      result[key as keyof T] = newVal;
    }
  });

  return result;
};

