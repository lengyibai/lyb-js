/**
 * @description 延时执行，切换到其他页面会暂停
 * @param delay 延时毫秒数
 * @param fn 延时执行函数
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsPromiseTimeout(3000, () => {
 *   console.log("执行延时函数");
 * });
 */
export const libJsPromiseTimeout = (delay = 1, fn?: () => void) => {
  let timeoutId: any;
  let remainingTime = delay;
  let startTime = Date.now();
  let isPaused = false;

  return new Promise<void>((resolve) => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        clearTimeout(timeoutId);
        remainingTime -= Date.now() - startTime;
      } else {
        if (isPaused) {
          isPaused = false;
          startTime = Date.now();
          startTimeout(resolve);
        }
      }
    };

    const startTimeout = (resolve: () => void) => {
      timeoutId = setTimeout(() => {
        fn?.();
        resolve();
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      }, remainingTime);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startTimeout(resolve);
  });
};
