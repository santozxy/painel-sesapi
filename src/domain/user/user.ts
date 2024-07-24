import { api } from "@api/config";
import { User } from "./userTypes";

export async function saveCpf(cpf: string) {
  const { data } = await api.put("/save_user_cpf", { cpf });
  return data;
}

export async function getMe() {
  const { data } = await api.get<User>("/me");

  return data;
}
