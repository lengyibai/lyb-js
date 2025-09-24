import { libJsRandom } from "../Random/LibJsRandom";

/**
 * @description 从候选数组中随机取一个未使用的元素
 * @param pool 全部候选数组
 * @param used 已使用数组
 * @returns 未使用的随机元素，若无可用则返回 undefined
 */
export const libJsPickUnique = <T>(
  pool: T[],
  used: T[] = []
): T | undefined => {
  const usedSet = new Set(used);
  const available = pool.filter((item) => !usedSet.has(item));
  if (available.length === 0) return undefined;
  return available[libJsRandom(0, available.length - 1)];
};
