/** @description 将链接图片下载到本地
 * @param link 图片链接
 * @param name 图片名称
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsDownloadImageLink("https://example.com/image.jpg", "图片.jpg");
 */
export const libJsDownloadImageLink = (link: string, name: string) => {
  fetch(link)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name;
      a.click();
    });
};
