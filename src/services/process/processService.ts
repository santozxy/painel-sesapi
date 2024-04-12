import axios from "axios";
import { ProcessData } from "./processDTO";

const base_url = import.meta.env.VITE_BASE_URL;
async function searchProcess(process: string) {
  const { data } = await axios.get<ProcessData>(`${base_url}/${process}`);
  return data;
}

export { searchProcess };
