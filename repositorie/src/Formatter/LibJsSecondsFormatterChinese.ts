import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

let hasExtendedDuration = false;

const ensureDurationPlugin = () => {
  if (hasExtendedDuration) {
    return;
  }

  dayjs.extend(duration);
  hasExtendedDuration = true;
};

/** @description 将秒数格式化为中文时间描述 */
export const libJsSecondsFormatterChinese = (seconds: number) => {
  ensureDurationPlugin();

  const currentDuration = dayjs.duration(seconds, "seconds");
  const years = Math.floor(currentDuration.asYears());
  const months = Math.floor(currentDuration.asMonths() % 12);
  const days = Math.floor(currentDuration.asDays() % 30);
  const hours = currentDuration.hours();
  const minutes = currentDuration.minutes();
  const remainingSeconds = currentDuration.seconds();
  const timeParts: string[] = [];

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
