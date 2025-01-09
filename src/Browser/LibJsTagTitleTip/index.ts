/** @description 网站标题交互，当从当前网页切换到其他网页，网站标题自动切换
 * @param backTitle 从其他网页返回时显示的标题
 * @param leaveTitle 从当前网页离开时显示的标题
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsTagTitleTip("欢迎回来", "来和妲己玩耍吧！");
 */
export const libJsTagTitleTip = (backTitle: string, leaveTitle: string) => {
  let document_title = "";
  let timer: NodeJS.Timeout;
  window.addEventListener("visibilitychange", () => {
    clearTimeout(timer);

    if (document.hidden) {
      if (document.title !== backTitle) {
        document_title = document.title;
      }
      document.title = leaveTitle;
      return;
    }

    document.title = backTitle;

    timer = setTimeout(() => {
      document.title = document_title;
    }, 1000);
  });
};
