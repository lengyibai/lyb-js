import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const libJsCountdown = (endTime: number) => {
  const startTime = dayjs();
  const diff = dayjs(endTime).diff(startTime);
  const time = dayjs.duration(diff);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return {
    years: diff <= 0 ? "00" : pad(time.years()),
    months: diff <= 0 ? "00" : pad(time.months()),
    days: diff <= 0 ? "00" : pad(time.days()),
    hours: diff <= 0 ? "00" : pad(time.hours()),
    minutes: diff <= 0 ? "00" : pad(time.minutes()),
    seconds: diff <= 0 ? "00" : pad(time.seconds()),
    ended: diff <= 0,
  };
};
