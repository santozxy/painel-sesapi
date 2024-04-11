/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card } from "./Card";
import { Unids } from "@services/process/processDTO";

interface CardListProps {
  data: Unids;
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

export function CardList({ data }: CardListProps) {
  // Função de comparação para ordenar as unidades com base na ordem de chegada
  const unitCompare = (a: [string, any], b: [string, any]) => {
    const orderA = parseInt(Object.keys(a[1])[0]);
    const orderB = parseInt(Object.keys(b[1])[0]);
    return orderA - orderB;
  };
  // Ordenando as unidades...
  const sortedUnits = Object.entries(data).sort(unitCompare);

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      {sortedUnits.map(([unitId, unitData], index) =>
        Object.entries(unitData).map(([order, detail]) => (
          <Card
            key={`${unitId}-${order}`}
            detail={detail}
            cardColor={colors[index]}
          />
        ))
      )}
    </div>
  );
}
