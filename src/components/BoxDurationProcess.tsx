import { Timer } from "lucide-react";
import React, { useState } from "react";
import Draggable from "react-draggable";

interface BoxDurationProcessProps {
  totalDuration?: string;
  pauseDuration?: string;
}

export default function BoxDurationProcess({
  totalDuration = "",
  pauseDuration = "",
}: BoxDurationProcessProps) {
  const [toggleTypeDuration, setToggleTypeDuration] = useState(1);

  const handleToggleTime = (id: number) => {
    setToggleTypeDuration(id);
  };

  return (
    <Draggable
      defaultClassName="border dark:border-gray-600 rounded-md cursor-grab"
      bounds="html"
    >
      {totalDuration ? (
        <div
          className={`fixed bottom-5 right-1/3 left-1/3  mx-auto shadow-md text-lg z-50 bg-white max-sm:right-2 max-sm:left-2`}
        >
          <div className="flex justify-between border-b-2 ">
            <button
              role="button"
              aria-label="Toggle Time"
              onClick={() => handleToggleTime(1)}
              className={`bg-primary dark:bg-dark rounded-tl-md ${toggleTypeDuration === 1 ? "bg-opacity-100 dark:bg-opacity-100" : "dark:bg-opacity-70 bg-opacity-70"} w-full flex  gap-3 items-center justify-center p-2 border-r dark:border-gray-600 cursor-pointer`}
            >
              <Timer size={20} className="text-white" />
              <h2 className="font-semibold text-center max-sm:text-sm text-light">
                Duração Total
              </h2>
            </button>
            <button
              onClick={() => handleToggleTime(2)}
              className={`bg-primary dark:bg-dark ${toggleTypeDuration === 2 ? "bg-opacity-100 dark:bg-opacity-100" : "dark:bg-opacity-70 bg-opacity-70"} w-full flex  gap-3 items-center justify-center p-2 rounded-tr-md cursor-pointer`}
            >
              <Timer size={20} className="text-white" />
              <h2 className="font-semibold text-center max-sm:text-sm text-terciary-light">
                Duração Pausado
              </h2>
            </button>
          </div>

          <h2 className="font-medium p-2 max-sm:text-sm">
            {toggleTypeDuration === 1 ? totalDuration : pauseDuration}
          </h2>
        </div>
      ) : (
        <></>
      )}
    </Draggable>
  );
}
