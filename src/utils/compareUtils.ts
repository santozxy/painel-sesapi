import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, parse } from "date-fns";

export function CalculatorTimeDuration(start: string, end: string) {
  const dataInicio = parse(start, "dd/MM/yyyy HH:mm:ss", new Date());
  const dataFim = parse(end, "dd/MM/yyyy HH:mm:ss", new Date());
  const dias = differenceInDays(dataFim, dataInicio);
  const horas = differenceInHours(dataFim, dataInicio) % 24;
  const minutos = differenceInMinutes(dataFim, dataInicio) % 60;
  const segundos = differenceInSeconds(dataFim, dataInicio) % 60;
  const differenceDays = dias > 0 ? `${dias} Dia(s)` : "0 Dia(s)";
  const differenceHours = horas > 0 ? `${horas} Hora(s)` : "0 Hora(s)";
  const differenceMinutes =
    minutos > 0 ? `${minutos} Minuto(s)` : "0 Minuto(s)";
  const differenceSeconds =
    segundos > 0 ? `${segundos} Segundo(s)` : "0 Segundo(s)";
  const duration = `${differenceDays} ${differenceHours} ${differenceMinutes} ${differenceSeconds}`;

  const limitDate = dias <= 2;

  return { duration, limitDate };
}
