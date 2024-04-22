import { toast, Id } from "react-toastify";

export function copyToClipboard(value: string, message: string) {
  const toastId = value as Id;
  navigator.clipboard.writeText(value);
  toast.success(`${message}\n${value}`, { toastId: toastId});
}
