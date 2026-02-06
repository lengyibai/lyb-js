import { libJsIsNull } from "../Base/LibJsIsNull";

/** @description 去掉对象内的空值 */
export const libJsPruneEmpty = (obj: Record<string, any>) => {
  const result = Object.entries(obj).reduce<Record<string, any>>(
    (acc, [key, value]) => {
      if (Array.isArray(value)) {
        if (value.length) acc[key] = value;
        return acc;
      }

      if (value && typeof value === "object" && !Array.isArray(value)) {
        const next = libJsPruneEmpty(value);
        if (next) acc[key] = next;
        return acc;
      }

      if (!libJsIsNull(value)) {
        acc[key] = value;
      }

      return acc;
    },
    {},
  );

  return Object.keys(result).length ? result : undefined;
};
