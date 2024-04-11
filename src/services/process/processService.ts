import axios from "axios";
import { ProcessDTO, ProcessDTOResume } from "./processDTO";

const base_url = import.meta.env.VITE_BASE_URL;
async function searchProcess(process: string, mode: number) {
  try {
    const { data } = await axios.get<ProcessDTO | ProcessDTOResume>(`${base_url}/${process}/${mode}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { searchProcess };
