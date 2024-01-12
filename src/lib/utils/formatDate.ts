import dayjs from "dayjs";
import("dayjs/locale/ru");

interface formats {
  [x: string]: string;
}

const formats: formats = {
  departureDate: "HH:MM D MMM dd",
  arrivalDate: "D MMM dd HH:MM ",
};

const formatDate = (date: Date | string | number, format: string) => {
  return dayjs(date).locale("ru").format(format);
};

export const getDepartureDate = (date: Date | string | number) =>
  formatDate(date, formats.departureDate);

export const getArrivalDate = (date: Date | string | number) =>
  formatDate(date, formats.arrivalDate);

export const getDuration = (minutes: number) => {
  const hours_duration = Math.floor(minutes / 60);
  const minutes_duration = minutes - hours_duration * 60;
  return `${hours_duration} ч ${minutes_duration} мин`;
};
