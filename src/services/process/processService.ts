import axios from "axios";
import { ProcessDTO } from "./processDTO";

const base_url = import.meta.env.VITE_BASE_URL;
async function searchProcess(process: string) {
  try {
    const { data } = await axios.get<ProcessDTO>(`${base_url}/${process}/0`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { searchProcess };
