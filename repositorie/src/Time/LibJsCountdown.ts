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

/** @description 倒计时，keepUnit 为保留单位时不再使用更高单位进位 */
export const libJsCountdown = (
  endTime: number,
  keepUnit: "year" | "month" | "day" | "hour" | "minute" | "second"
) => {
  ensureDurationPlugin();

  const startTime = dayjs();
  const diff = dayjs(endTime).diff(startTime);
  const time = dayjs.duration(diff);
  const pad = (num: number) => num.toString().padStart(2, "0");

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

  const years = time.years();
  const months = time.months();
  const days = time.days();
  let hours = time.hours();
  let minutes = time.minutes();
  let seconds = time.seconds();
  const totalSeconds = time.asSeconds();

  if (keepUnit === "hour") {
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = Math.floor(totalSeconds % 60);
  } else if (keepUnit === "minute") {
    minutes = Math.floor(totalSeconds / 60);
    seconds = Math.floor(totalSeconds % 60);
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
