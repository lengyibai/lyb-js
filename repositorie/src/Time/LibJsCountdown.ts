import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const libJsCountdown = (endTime: number) => {
  const startTime = dayjs();
  const diff = dayjs(endTime).diff(startTime);
  const time = dayjs.duration(diff);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return {
    years: pad(time.years()),
    months: pad(time.months()),
    days: pad(time.days()),
    hours: pad(time.hours()),
    minutes: pad(time.minutes()),
    seconds: pad(time.seconds()),
    ended: diff <= 0,
  };
};
