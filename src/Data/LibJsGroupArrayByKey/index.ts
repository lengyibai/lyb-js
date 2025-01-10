/**
 * @description 分类汇总，将数组对象按照指定键值整理成一个以键值为键名的对象
 * @param arr 要分组的数组
 * @param key 分组的键
 * @returns 分组后的对象
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsGroupArrayByKey-分类汇总
 */
export const libJsGroupArrayByKey = (arr: any[] = [], key: string) => {
  return key
    ? arr.reduce((t, v) => {
        if (!t[v[key]]) {
          t[v[key]] = [];
        }
        t[v[key]].push(v);
        return t;
      }, {})
    : {};
};
