/** @description 获取浏览器地址栏参数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsPathParams-地址栏参数
 */
export const libJsPathParams = () => {
  const v = location.href;
  const url = v.split("?")[1];

  if (!url) return {};

  const params =
    url.split("&").reduce((pre: Record<string, string>, cur) => {
      const [k, v] = cur.split(/=(.+)/);
      return (pre[k] = v), pre;
    }, {}) || {};

  return params;
};
