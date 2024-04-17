/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Detail } from "@services/process/processDTO";
import {
  ChevronDownCircle,
  ChevronDownIcon,
  ChevronUpCircle,
  ChevronUpIcon,
  LogIn,
  LogOut,
} from "lucide-react";
import { CalculatorTimeDuration } from "@utils/compareUtils";
import { useCollapse } from "react-collapsed";

interface CardProps {
  detail: Detail;
  cardColor: string;
}

export function Card({ detail, cardColor }: CardProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const { start, unidDescription, group, end } = detail;
  const formattedGroup =
    group === "OUTROS" ? group : group.replace(/[_]|[\u0300-\u036f]/g, " ");
  const formattedDuration = CalculatorTimeDuration(start, end);
  const duration = formattedDuration.duration;
  const limitDate = formattedDuration.limitDate;
  const verifyColorTerm = limitDate ? "text-[#027651]" : "text-red-500";
  const colorOthers = group === "OUTROS" ? "bg-gray-300" : cardColor;
  const colorIcon = "#2f2f2f";

  return (
    <div
      className={`bg-white rounded-md shadow-md flex flex-col gap-2 w-64 ${
        isExpanded ? "h-64" : "h-44"
      }`}
    >
      <div
        className={`px-2 py-3 flex items-center justify-center relative ${colorOthers} rounded-t-md cursor-pointer`}
        {...getToggleProps()}
      >
        <p className="font-semibold text-center text-terciary-dark">
          {formattedGroup === "PAGAMENTO"
            ? "FUNSAUDE"
            : formattedGroup === "GABINETE"
            ? "GAB"
            : formattedGroup === "UNIDADE FISCAL"
            ? "UNIDADE EXECUTANTE"
            : formattedGroup}
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
          {unidDescription}
        </p>
      </div>
      <div className="flex flex-col gap-2" {...getCollapseProps()}>
        <div className="flex justify-center p-1 gap-2 border-b-2">
          <LogIn size={20} />
          <p className="text-sm font-medium text-center text-terciary-dark">
            {start}
          </p>
        </div>

        <div className="flex justify-center p-1 gap-2 border-b-2">
          <LogOut size={20} />
          <p className="text-sm font-medium text-center text-terciary-dark">
            {end}
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
