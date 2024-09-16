import { api } from "@api/config";
import { LoginDTO, LoginParams } from "./authTypes";

export async function login(login: LoginParams) {
  const body = {
    usuario: login.user,
    senha: login.password,
    nickname: login.nickname,
    orgao: "36",
  };
  const { data } = await api.post<LoginDTO>("/login", body);
  return data;
}
