/** @description 判断是否为移动设备
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsIsMobile-判断手机
 */
export const libJsIsMobile = () => {
  const ua = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipod/.test(ua);
};
