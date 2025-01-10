/**
 * @description 保存文件到本地
 * @param name 文件名
 * @param data 要保存的数据
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSaveJson-保存文件
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
