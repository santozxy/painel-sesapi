import { Timer } from "lucide-react";
import React, { useState } from "react";
import Draggable from "react-draggable";

export function BoxDurationProcess({ duration = "" }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      defaultClassName="border border-gray-300"
      bounds="html"
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      {duration ? (
        <div
          className={`fixed bottom-4 right-4  bg-white max-sm:bottom-5 max-sm:right-2 max-sm:left-2  rounded-lg shadow-md text-lg cursor-grab z-50 ${
            isDragging ? "shadow-primary" : ""
          }`}
        >
          <div className="bg-primary flex gap-3 items-center justify-center p-2 border-b-2 rounded-t-md">
            <Timer size={22} color="#f5f5f5" />
            <h2 className="font-semibold text-center max-sm:text-sm text-terciary-light">
              Duração Total
            </h2>
          </div>

          <h2 className="font-medium p-2 max-sm:text-sm">{duration}</h2>
        </div>
      ) : (
        <></>
      )}
    </Draggable>
  );
}
