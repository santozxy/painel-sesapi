import { toast } from "react-toastify";

export function copyToClipboard(value: string, message: string) {
  navigator.clipboard.writeText(value);
  toast.success(`${message}\n${value}`);
}
