import { User } from "@domain/user/userTypes";

export interface LoginDTO {
  token: string;
  user: User;
}

export interface LoginParams {
  user: string;
  password: string;
  nickname?: string;
}

export interface ValidationLoginFromGOVBR {
  descryptedToken?: string;
  descryptedAuth?: string | number;
  nickname?: string | number;
  encryptedAuth?: string;
}
