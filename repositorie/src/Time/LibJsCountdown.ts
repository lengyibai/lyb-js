import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

/** @description 倒计时，keepUnit 为保留单位，不再使用其上的进制 */
export const libJsCountdown = (
  endTime: number,
  keepUnit: "year" | "month" | "day" | "hour" | "minute" | "second"
) => {
  const startTime = dayjs();
  const diff = dayjs(endTime).diff(startTime);
  const time = dayjs.duration(diff);

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (diff <= 0) {
    return {
      years: "00",
      months: "00",
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      ended: true,
    };
  }

  // 先获取原始值
  const years = time.years();
  const months = time.months();
  const days = time.days();
  let hours = time.hours();
  let minutes = time.minutes();
  let seconds = time.seconds();

  // 将整个时长打平成秒
  const totalSec = time.asSeconds();

  // 根据保留单位展开
  if (keepUnit === "hour") {
    hours = Math.floor(totalSec / 3600); // total hours
    minutes = Math.floor((totalSec % 3600) / 60);
    seconds = Math.floor(totalSec % 60);
  } else if (keepUnit === "minute") {
    minutes = Math.floor(totalSec / 60); // total minutes
    seconds = Math.floor(totalSec % 60);
  }

  return {
    years: pad(years),
    months: pad(months),
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    ended: false,
  };
};
