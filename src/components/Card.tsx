import { ProcessDTO } from "@services/process/processDTO";

interface Props {
  data: ProcessDTO;
}

export function Card({ data }: Props) {
  return (
    <div className="flex flex-col w-[250px] h-[250px]">
        <div className="p-2">{data.unids.toString()}</div>
    </div>
  );
}
