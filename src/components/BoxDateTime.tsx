import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
export function BoxDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Draggable
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        className={`fixed bottom-4 right-4 bg-white border border-gray-300 p-3 rounded-lg shadow-md text-lg cursor-grab ${
          isDragging ? "shadow-primary" : ""
        }`}
      >
        <h2 className="font-medium">
          {currentDateTime.toLocaleString("pt-BR", {
            dateStyle: "medium",
            timeStyle: "medium",
          })}
        </h2>
      </div>
    </Draggable>
  );
}
