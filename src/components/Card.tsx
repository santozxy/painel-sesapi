import React from "react";
import { Detail } from "@services/process/processDTO";
import { ChevronDownIcon, ChevronUpIcon, LogIn, LogOut } from "lucide-react";
import { CalculatorTimeDuration, ConvertSecondsDate } from "@utils";
import { useCollapse } from "react-collapsed";

interface CardProps {
  detail: Detail;
  cardColor: string;
}

export function Card({ detail, cardColor }: CardProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const { start, unidDescription, group, end, outOfTime, seconds } = detail;
  const formattedGroup =
    group != ""
      ? group === "OUTROS"
        ? group
        : group.replace(/[_]|[\u0300-\u036f]/g, " ")
      : group;
  const convertData = CalculatorTimeDuration(start, end);
  const formattedDuration = ConvertSecondsDate(seconds);
  console.log("Diferença entre start e end", convertData.duration);
  console.log("Duração em segundos", formattedDuration);
  const duration = formattedDuration;
  const verifyColorTerm = outOfTime ? "text-red-500" : start ? "text-green-700" : "text-terciary-dark";
  const colorOthers = group === "OUTROS" ? "bg-gray-300" : cardColor;
  const colorIcon = "#2f2f2f";

  return (
    <div
      className={`bg-white rounded-md shadow-md flex flex-col gap-2 w-64 ${
        isExpanded ? "h-64" : "h-44"
      }`}
    >
      <div
        className={`px-2 bg-opacity-75 hover:bg-opacity-100 py-3 flex items-center justify-center relative ${colorOthers} rounded-t-md cursor-pointer`}
        {...getToggleProps()}
      >
        <p className="font-semibold text-center text-terciary-dark">
          {formattedGroup}
        </p>
        <div className="absolute right-2">
          {isExpanded ? (
            <ChevronUpIcon color={colorIcon} />
          ) : (
            <ChevronDownIcon color={colorIcon} />
          )}
        </div>
      </div>
      <div className="border-b-2 p-1">
        <p className="text-sm font-medium text-center text-terciary-dark">
          {unidDescription ? unidDescription: "Nenhuma unidade"}
        </p>
      </div>
      <div className="flex flex-col gap-2" {...getCollapseProps()}>
        <div className="flex justify-center p-1 gap-2 border-b-2">
          <LogIn size={20} />
          <p className="text-sm font-medium text-center text-terciary-dark">
            {start ? start : "Não possui"}
          </p>
        </div>

        <div className="flex justify-center p-1 gap-2 border-b-2">
          <LogOut size={20} />
          <p className="text-sm font-medium text-center text-terciary-dark">
            {end ? end : "Não possui"}
          </p>
        </div>
      </div>
      <div className="p-1 flex-1">
        <p
          className={`text-sm font-medium text-center ${
            group != "OUTROS" ? verifyColorTerm : ""
          }`}
        >
          {duration}
        </p>
      </div>
    </div>
  );
}
