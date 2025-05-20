/** @description URL参数转对象
 * @param query URL参数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsParseQueryString-URL参数转对象
 */
export const libJsParseQueryString = (query: string) => Object.fromEntries(new URLSearchParams(decodeURIComponent(query)));