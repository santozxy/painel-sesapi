interface SeparatorProps {
  margin?: string;
}
export function Separator({ margin = "my-10" }: SeparatorProps) {
  return <span className={`w-full border-b ${margin}`}></span>;
}
