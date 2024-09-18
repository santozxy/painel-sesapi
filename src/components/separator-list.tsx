interface SeparatorProps {
  margin?: string;
}
export function Separator({ margin = "my-10" }: SeparatorProps) {
  return <span className={`w-full border-b dark:border-gray-600 ${margin}`}></span>;
}
