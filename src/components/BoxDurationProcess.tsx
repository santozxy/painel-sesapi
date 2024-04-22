import { Timer } from "lucide-react";
import React, { useState } from "react";
import Draggable from "react-draggable";

export default function BoxDurationProcess({ duration = "" }) {
  const [toggleTypeDuration, setToggleTypeDuration] = useState(1);

  const handleToggleTime = (id: number) => {
    setToggleTypeDuration(id);
  };

  return (
    <Draggable
      defaultClassName="border dark:border-gray-600 rounded-md cursor-grab"
      bounds="html"
    >
      {duration ? (
        <div
          className={`fixed bottom-4 right-1/3 left-1/3  mx-auto shadow-md text-lg z-50 bg-white max-sm:bottom-5 max-sm:right-2 max-sm:left-2`}
        >
          <div className="flex justify-between">
            <button
              onClick={() => handleToggleTime(1)}
              className={`bg-primary dark:bg-dark ${toggleTypeDuration === 1 ? "bg-opacity-100" : "bg-opacity-60"} w-full flex  gap-3 items-center justify-center p-2 border-b-2 rounded-t-md `}
            >
              <Timer size={20} className="text-white" />
              <h2 className="font-semibold text-center max-sm:text-sm text-light">
                Duração Total
              </h2>
            </button>
            {/* <button
              onClick={() => handleToggleTime(2)}
              className={`bg-primary ${toggleTypeDuration === 2 ? "bg-opacity-100":"bg-opacity-60"} w-full flex  gap-3 items-center justify-center p-2 border-b-2 rounded-tr-md cursor-pointer`}
            >
              <h2 className="font-semibold text-center max-sm:text-sm text-terciary-light">
                Duração Pausado
              </h2>
            </button> */}
          </div>

          <h2 className="font-medium p-2 max-sm:text-sm">
            {toggleTypeDuration === 1
              ? duration
              : "24 dia(s) 03 hora(s) 20 minuto(s) 8 segundo(s)"}
          </h2>
        </div>
      ) : (
        <></>
      )}
    </Draggable>
  );
}
