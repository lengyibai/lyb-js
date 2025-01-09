/** @description 判断是否为移动设备
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const isMobile = libIsMobile();
 * console.log(isMobile); //true 或 false
 */
export const libJsIsMobile = () => {
  const ua = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipod/.test(ua);
};
