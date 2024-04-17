/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Detail } from "@services/process/processDTO";
import { LogIn, LogOut } from "lucide-react";
import { compareAsc } from "date-fns";
import { calcularTempoDecorrido } from "@utils/CompareUtils";

interface CardProps {
  detail: Detail;
  cardColor: string;
}

export function Card({ detail, cardColor }: CardProps) {
  const { minutes, seconds, start, unidDescription, group, end } = detail;
  const formattedGroup =
    group === "OUTROS" ? group : group.replace(/[_]|[\u0300-\u036f]/g, " ");
  const formattedDuration = calcularTempoDecorrido(start, end);
  const duration = formattedDuration.duration;

  return (
    <div className="bg-white rounded-md shadow-md flex flex-col gap-2 w-64 h-64 ">
      <div className={`px-2 py-3 ${group === "OUTROS" ? "bg-gray-300":cardColor} rounded-t-md`}>
        <p className="font-semibold text-center">{formattedGroup}</p>
      </div>
      <div className="pb-1 border-b-2">
        <p className="text-sm font-medium text-center">{unidDescription}</p>
      </div>
      <div className="flex justify-center gap-2 pb-1 border-b-2">
        <LogIn />
        <p className="text-sm font-medium text-center">{start}</p>
      </div>

      <div className="flex justify-center gap-2 pb-1 border-b-2">
        <LogOut />
        <p className="text-sm font-medium text-center">{end}</p>
      </div>
      <div className="mt-5 p-1">
        <p className="text-sm font-medium text-center">{duration}</p>
      </div>
    </div>
  );
}
