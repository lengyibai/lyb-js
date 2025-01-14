/**
 * @description 匹配电子邮件，可用于实时输入时，自动补全常用邮箱后缀
 * @param str 要匹配的字符串
 * @param emailList 电子邮件后缀列表
 * @returns 匹配结果数组
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsMatchEmail-匹配E-Mail
 */
export const libJsMatchEmail = (str: string, emailList: string[]) => {
  return str.includes("@")
    ? emailList
        .filter((item) => item.includes(str.slice(str.indexOf("@"))))
        .map((item) => (str.includes("@") ? str.split("@")[0] : str) + item)
    : emailList.map((item) => str + item);
};
