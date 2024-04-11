/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Card } from "../Card";
import { DetailResume } from "@services/process/processDTO";

interface CardListProps {
  data: DetailResume[];
}

const colors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-pink-200",
  "bg-purple-200",
  "bg-indigo-200",
  "bg-red-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-cyan-200",
  "bg-rose-200",
  "bg-lime-200",
];
export function CardListResume({ data }: CardListProps) {
  const filteredData = data.filter((detail) => detail.group !== "OUTROS");
  return (
    <div className="flex flex-wrap  gap-6 justify-center items-center">
      {filteredData.map((detail, index) => (
        <Card
          key={`${detail.group}-${index}`}
          detail={detail}
          cardColor={colors[index]}
        />
      ))}
    </div>
  );
}
