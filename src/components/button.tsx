import { LoaderCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-primary/90 text-background dark:text-foreground flex items-center justify-center p-2 rounded-md hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50 shadow-lg",
        props.className
      )}
    >
      {loading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <span className="font-semibold">{title}</span>
      )}
    </button>
  );
}
