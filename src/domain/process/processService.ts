import { ProcessData } from "./processTypes";
import { api } from "@api/config";

async function searchProcess(process: string) {
  const { data } = await api.get<ProcessData>(`/${process}`);
  return data;
}

export { searchProcess };
