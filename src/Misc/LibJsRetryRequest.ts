/** @description 请求失败重连
 * @param promiseFn 请求函数
 * @param maxRetries 最大重试次数
 * @param retryDelay 重试间隔时间
 * @param params 请求参数
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRetryRequest-请求重连
 */
export const libJsRetryRequest = <T>({
  promiseFn,
  maxRetries = 3,
  retryDelay = 2000,
  params = undefined,
}: {
  promiseFn: (params?: any) => Promise<T>;
  params?: any;
  maxRetries?: number;
  retryDelay?: number;
  onRetry?: () => void;
}): Promise<T> => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const makeRequest = () => {
      promiseFn(params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          count++;
          if (count >= maxRetries) {
            reject(err);
            return;
          }
          setTimeout(makeRequest, retryDelay);
        });
    };

    makeRequest();
  });
};
