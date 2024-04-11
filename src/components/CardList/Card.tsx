/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Detail } from "@services/process/processDTO";

interface CardProps {
  detail: Detail;
  cardColor: string;
}

export function Card({ detail, cardColor }: CardProps) {
  const { start, unidDescription, group, end, minutes, seconds } = detail;
  const formattedGroup = group.replace(/[^\w\s]/g, " ");

  console.log(cardColor);
  return (
    <div className="bg-white rounded-md shadow-md  w-[240px] h-[240px]">
      <div className={`px-2 py-4 ${cardColor} rounded-t-md`}>
        <p className="font-medium">{unidDescription}</p>
      </div>
      <p>Início: {start}</p>
      <p>Fim: {end}</p>
      <p>
        Duração: {minutes} minutos {seconds} segundos
      </p>
    </div>
  );
}
