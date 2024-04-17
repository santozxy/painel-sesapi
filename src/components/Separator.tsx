import React from "react";

interface SeparatorProps {
  margin?: string;
}
export function Separator({ margin = "my-10" }: SeparatorProps) {
  return <span className={`w-full h-[1px] bg-gray-300 ${margin}`}></span>;
}
