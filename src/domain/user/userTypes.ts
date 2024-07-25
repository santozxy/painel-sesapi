export interface User {
  id: number;
  name: string;
  username: string;
  senha: string;
  sigla: string;
  idUsuario: string;
  organ_id: number;
  orgao: number;
  permission: string;
  cpf: string | null;
  nickname: string | null;
  email: string | null;
  preferred_username: string | null;
  created_at: string;
  updated_at: string;
}
