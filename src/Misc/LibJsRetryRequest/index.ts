/** @description 请求失败重连
 * @param promiseFn 请求函数
 * @param maxRetries 最大重试次数
 * @param retryDelay 重试间隔时间
 * @param params 请求参数
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const requestFn = (params: { url: string }) => fetch(params.url).then(res => res.json());
 * const params = { url: "https://api.example.com/data" };
 * libJsRetryRequest({
 *   promiseFn: requestFn,
 *   params,
 *   maxRetries: 5,
 *   retryDelay: 1000
 * })
 * .then(data => console.log(data))
 * .catch(err => console.error(err));
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
