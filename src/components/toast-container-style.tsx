import { ToastContainer } from "react-toastify";

export function ToastContainerStyle() {
  return (
    <ToastContainer
      toastClassName={
        "dark:bg-dark dark:border dark:border-gray-500 dark:text-light shadow-md font-light"
      }
      position="top-right"
      pauseOnHover={false}
      autoClose={3000}
    />
  );
}
