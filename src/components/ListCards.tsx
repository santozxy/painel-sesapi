/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "./Card";
import { Detail } from "@services/process/processDTO";
import { Separator } from "./Separator";

interface CardListProps {
  data: Detail[];
  type?: string;
}

const colors = [
  "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-cyan-200",
    "bg-gray-200",
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-teal-300",
    "bg-orange-300",
    "bg-cyan-300",
    "bg-gray-300",
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-teal-400",
    "bg-orange-400",
    "bg-cyan-400",
    "bg-gray-400",
];
export function ListCards({ data, type }: CardListProps) {
  return (
    <div className="flex flex-col gap-2 mx-5">
      {type && (
        <div className="flex gap-2 justify-center items-center max-sm:flex-col">
          <h1 className="text-xl text-center font-bold max-sm:text-base">
            Tipo de Processo:
          </h1>
          <h1 className="text-xl text-center font-medium  max-sm:text-base">
            {type}
          </h1>
        </div>
      )}
      <div className="flex flex-wrap mt-5 gap-6 justify-center items-center">
        {data.map((detail, index) => (
          <Card
            key={`${detail.group}-${index}`}
            detail={detail}
            cardColor={colors[index]}
          />
        ))}
      </div>
      {data && <Separator />}
    </div>
  );
}
