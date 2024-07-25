import axios from "axios";
import { ProcessData } from "./processTypes";

async function searchProcess(process: string) {
  const { data } = await axios.get<ProcessData>(`https://api.painel.sei.pi.gov.br/api/processos/contratos/${process}`);
  return data;
}

export { searchProcess };
