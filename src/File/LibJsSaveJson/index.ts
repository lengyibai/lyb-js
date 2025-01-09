/**
 * @description 保存文件到本地
 * @param name 文件名
 * @param data 要保存的数据
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsSaveJson("example.json", JSON.stringify({ key: "value" }));
 * libJsSaveJson("example.txt", "Hellow World!");
 */
export const libJsSaveJson = (name: string, data: BlobPart) => {
  const urlObject = window.URL || window.webkitURL;
  const exportBlob = new Blob([data]);
  const saveLink = document.createElement("a");
  saveLink.href = urlObject.createObjectURL(exportBlob);
  saveLink.download = name;
  saveLink.click();
  urlObject.revokeObjectURL(saveLink.href);
};
