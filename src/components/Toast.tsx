import { toast } from "react-toastify";

interface Props {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export default function Toast({ message, type }: Props) {
  return toast(message, {
    type: type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
