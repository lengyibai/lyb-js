/** @description 动态设置网站标题及图标
 * @param title 网站标题
 * @param url 网站图标地址
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSetTitleIcon-网站标题图标
 */
export const libJsSetTitleIcon = (title: string, url: string) => {
  document.title = title;
  const link = document.createElement("link");
  link.setAttribute("rel", "icon");
  link.setAttribute("href", url);

  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(link);
};
