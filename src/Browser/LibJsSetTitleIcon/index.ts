/** @description 动态设置网站标题及图标
 * @param title 网站标题
 * @param url 网站图标地址
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsSetTitleIcon("我的网站", "https://example.com/favicon.ico");
 */
export const libJsSetTitleIcon = (title: string, url: string) => {
  document.title = title;
  const link = document.createElement("link");
  link.setAttribute("rel", "icon");
  link.setAttribute("href", url);

  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(link);
};
