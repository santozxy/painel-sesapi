import { Trash2 } from "lucide-react";
import { ToastContainer } from "react-toastify";

export function ToastContainerStyle() {
  return (
    <ToastContainer
      toastClassName={
        "dark:bg-dark dark:border dark:border-gray-500 dark:text-light shadow-md font-light"
      }
      position="top-right"
      closeButton={() => (
        <Trash2 size={21} className="text-dark dark:text-light" />
      )}
      pauseOnHover={false}
      autoClose={3000}
    />
  );
}
