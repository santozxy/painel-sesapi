import axios from "axios";
import { ProcessDTO } from "./processDTO";

async function searchProcess(process: string) {
  try {
    const { data } = await axios.get<ProcessDTO>(
      `https://api.painel.sei.pi.gov.br/api/processos/${process}/0`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { searchProcess };
