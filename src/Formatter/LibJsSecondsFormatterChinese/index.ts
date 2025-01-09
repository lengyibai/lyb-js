import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

/**
 * @description 将秒数格式化为中文时间描述，支持扩展到年
 * @param seconds 秒数
 * @returns 格式化后的中文时间
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * libJsSecondsFormatterChinese(100000); //"1天3小时46分40秒"
 * libJsSecondsFormatterChinese(31536000); //"1年"
 * libJsSecondsFormatterChinese(3600); //"1小时"
 * libJsSecondsFormatterChinese(90); //"1分30秒"
 */
export const libJsSecondsFormatterChinese = (seconds: number) => {
  const duration = dayjs.duration(seconds, "seconds");

  const years = Math.floor(duration.asYears());
  const months = Math.floor(duration.asMonths() % 12);
  const days = Math.floor(duration.asDays() % 30);
  const hours = duration.hours();
  const minutes = duration.minutes();
  const remainingSeconds = duration.seconds();

  const timeParts = [];

  if (years > 0) {
    timeParts.push(`${years}年`);
  }

  if (months > 0) {
    timeParts.push(`${months}月`);
  }

  if (days > 0) {
    timeParts.push(`${days}天`);
  }

  if (hours > 0) {
    timeParts.push(`${hours}小时`);
  }

  if (minutes > 0) {
    timeParts.push(`${minutes}分`);
  }

  if (timeParts.length === 0 || remainingSeconds > 0) {
    timeParts.push(`${remainingSeconds}秒`);
  }

  return timeParts.join("");
};
