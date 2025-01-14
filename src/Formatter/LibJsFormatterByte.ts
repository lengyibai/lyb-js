/**
 * @description 格式化字节大小
 * @param bytes 字节数
 * @returns ['大小', '单位', '大小及单位']
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsFormatterByte-字节格式化
 */
export const libJsFormatterByte = (bytes: number) => {
  if (bytes <= 0) return [0, "B", "0 B"];

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(k)),
    sizes.length - 1
  );

  const size = (bytes / k ** i).toFixed(2);
  return [size, sizes[i], `${size} ${sizes[i]}`];
};
