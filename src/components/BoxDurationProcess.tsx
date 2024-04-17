import { Copy, Timer } from "lucide-react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { toast } from "react-toastify";
export function BoxDurationProcess({ duration = "", process = "" }) {
  const [isDragging, setIsDragging] = useState(false);
  function copyToClipboard() {
    navigator.clipboard.writeText(process);
    toast.success(`Processo foi copiado!\n${process}`);
  }
  return (
    <Draggable
      defaultClassName="max-sm:w-full"
      bounds="html"
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      {duration ? (
        <div
          className={`fixed bottom-4 right-4 bg-white max-sm:bottom-0 max-sm:right-0 max-sm:left-0 border border-gray-300 rounded-lg shadow-md text-lg cursor-grab z-50 ${
            isDragging ? "shadow-primary" : ""
          }`}
        >
          <div className="bg-primary flex gap-3 items-center justify-between p-2 border-b-2 rounded-t-md">
            <Timer size={22} color="#f5f5f5" />
            <h2 className="font-semibold text-center max-sm:text-sm text-terciary-light">
              {process}
            </h2>
            <button
              className="cursor-pointer text-terciary-light z-50"
              title="Copiar processo"
              onClick={copyToClipboard}
            >
              <Copy size={22} />
            </button>
          </div>

          <h2 className="font-medium p-2 max-sm:text-sm">{duration}</h2>
        </div>
      ) : (
        <></>
      )}
    </Draggable>
  );
}
