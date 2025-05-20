const fallbackCopy = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

/** @description 复制文本到剪贴板
 * @param text 要复制的文本
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsCopy-复制文本到剪贴板
 */
export const libJsCopy = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
};
