import { Timer } from "lucide-react";
import React, { useEffect, useState } from "react";

interface BoxDurationProcessProps {
  totalDuration?: string;
  pauseDuration?: string;
}

function DragElement(elmnt: HTMLElement) {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  if (!elmnt) {
    console.error("Element not found");
    return;
  }

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent) {
    e.preventDefault();
    const { clientX, clientY } = e;
    pos1 = pos3 - clientX;
    pos2 = pos4 - clientY;
    pos3 = clientX;
    pos4 = clientY;

    const rect = elmnt.getBoundingClientRect();
    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    newTop = Math.max(0, Math.min(newTop, window.innerHeight - rect.height));
    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - rect.width));

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export default function BoxDurationProcess({
  totalDuration = "",
  pauseDuration = "",
}: BoxDurationProcessProps) {
  const [toggleTypeDuration, setToggleTypeDuration] = useState(1);

  const handleToggleTime = (id: number) => {
    setToggleTypeDuration(id);
  };
  const pause = pauseDuration ? pauseDuration : "Não houve pausas";

  useEffect(() => {
    const elmnt = document.getElementById("DragInfo");
    if (elmnt) {
      DragElement(elmnt);
    }
  }, []);

  return (
    totalDuration && (
      <div
        className="fixed bottom-5 z-[9999] shadow-lg sm:w-[26rem] h-20 bg-white right-5 rounded-md"
        draggable
        id="DragInfo"
      >
        <div className="flex justify-between border-b-2 ">
          <button
            role="button"
            aria-label="Toggle Time"
            onClick={() => handleToggleTime(1)}
            className={`bg-primary dark:bg-dark rounded-tl-md ${toggleTypeDuration === 1 ? "bg-opacity-100 dark:bg-opacity-100" : "dark:bg-opacity-70 bg-opacity-70"} w-full flex gap-3 items-center justify-center border-r dark:border-gray-600 cursor-pointer`}
          >
            <Timer size={20} className="text-light" />
            <h2 className="font-semibold text-base text-center max-sm:text-sm text-light">
              Duração Total
            </h2>
          </button>
          <button
            onClick={() => handleToggleTime(2)}
            className={`bg-primary dark:bg-dark ${toggleTypeDuration === 2 ? "bg-opacity-100 dark:bg-opacity-100" : "dark:bg-opacity-70 bg-opacity-70"} w-full flex  gap-3 items-center justify-center p-1 rounded-tr-md cursor-pointer`}
          >
            <Timer size={20} className="text-light" />
            <h2 className="font-semibold text-base text-center max-sm:text-sm text-light">
              Pausas
            </h2>
          </button>
        </div>

        <h2 className="font-medium text-base text-dark p-1.5 max-sm:text-sm text-center">
          {toggleTypeDuration === 1 ? totalDuration : pause}
        </h2>
      </div>
    )
  );
}
