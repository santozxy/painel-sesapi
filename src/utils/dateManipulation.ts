import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  parse,
} from "date-fns";

export function CalculatorTimeDuration(start: string, end: string) {
  if (!start || !end) {
    return {
      duration: "0 Dia(s) 0 Hora(s) 0 Minuto(s) 0 Segundo(s)",
      limitDate: false,
    };
  }
  const initialDate = parse(start, "dd/MM/yyyy HH:mm:ss", new Date());
  const finalDate = parse(end, "dd/MM/yyyy HH:mm:ss", new Date());
  const days = differenceInDays(finalDate, initialDate);
  const hours = differenceInHours(finalDate, initialDate) % 24;
  const minutes = differenceInMinutes(finalDate, initialDate) % 60;
  const seconds = differenceInSeconds(finalDate, initialDate) % 60;
  const differenceDays = days > 0 ? `${days} Dia(s)` : "0 Dia(s)";
  const differenceHours = hours > 0 ? `${hours} Hora(s)` : "0 Hora(s)";
  const differenceMinutes =
    minutes > 0 ? `${minutes} Minuto(s)` : "0 Minuto(s)";
  const differenceSeconds =
    seconds > 0 ? `${seconds} Segundo(s)` : "0 Segundo(s)";
  const duration = `${differenceDays} ${differenceHours} ${differenceMinutes} ${differenceSeconds}`;
  const limitDate = days <= 2;
  return { duration, limitDate };
}

export function ConvertSecondsDate(seconds: number) {
  if (seconds < 0) {
    return "0 Dia(s) 0 Hora(s) 0 Minuto(s) 0 Segundo(s)";
  }
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;
  return `${days} Dia(s) ${hours} Hora(s) ${minutes} Minuto(s) ${secondsLeft} Segundo(s)`;
}
