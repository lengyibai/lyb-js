/** @description 判断是否为平板
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsIsPad-判断平板
 */
export const libJsIsPad = () => {
  const ua = navigator.userAgent.toLowerCase();
  const width = Math.max(window.screen.width, window.screen.height);
  const height = Math.min(window.screen.width, window.screen.height);
  const aspectRatio = width / height;
  const isTabletUserAgent =
    /ipad|tablet|playbook|silk/.test(ua) && !/mobile/.test(ua);
  const isTabletWidth = width >= 768 && width <= 1366;
  const isTabletAspectRatio = aspectRatio >= 1.3 && aspectRatio <= 1.6;
  return isTabletUserAgent || (isTabletWidth && isTabletAspectRatio);
};
