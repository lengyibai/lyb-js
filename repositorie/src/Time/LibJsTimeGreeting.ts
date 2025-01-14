export interface LibTimeGreetingParams {
  midnight?: string;
  morning?: string;
  forenoon?: string;
  noon?: string;
  afternoon?: string;
  evening?: string;
}

/**
 * @description 根据当前时间返回问候语
 * @param greet 自定义问候语对象
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsTimeGreeting-时间问候
 */
export const libJsTimeGreeting = (greet: LibTimeGreetingParams = {}) => {
  const {
    midnight = "午夜好",
    morning = "早上好",
    forenoon = "上午好",
    noon = "中午好",
    afternoon = "下午好",
    evening = "晚上好",
  } = greet;
  const now = new Date().getHours();
  return now < 4
    ? midnight
    : now < 10
    ? morning
    : now < 12
    ? forenoon
    : now < 14
    ? noon
    : now < 18
    ? afternoon
    : evening;
};
