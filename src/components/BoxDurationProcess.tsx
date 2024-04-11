import React, { useState } from "react";
import Draggable from "react-draggable";
export function BoxDurationProcess({ duration = "" }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Draggable
      bounds="html"
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      {duration ? (
        <div
          className={`fixed bottom-4 right-4 bg-white max-sm:bottom-0 max-sm:right-0 border border-gray-300 rounded-lg shadow-md text-lg cursor-grab ${
            isDragging ? "shadow-primary" : ""
          }`}
        >
          <div className="bg-primary p-2 border-b-2 rounded-t-md">
            <h2 className="font-semibold text-center max-sm:text-small text-terciary-light">
              Tempo do Processo
            </h2>
          </div>

          <h2 className="font-medium p-2 max-sm:text-small">{duration}</h2>
        </div>
      ) : (
        <></>
      )}
    </Draggable>
  );
}
