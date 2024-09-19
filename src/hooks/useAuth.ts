import { login } from "@domain/auth/auth";
import { LoginParams, ValidationLoginFromGOVBR } from "@domain/auth/authTypes";
import { api } from "@api/config";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { redirect } from "@tanstack/react-router";
import CryptoJS from "crypto-js";
import { getMe, saveCpf } from "@domain/user/user";
import { User } from "@domain/user/userTypes";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const decryptedUser = CryptoJS.AES.decrypt(userData, "user").toString(
        CryptoJS.enc.Utf8
      );
      return JSON.parse(decryptedUser);
    }
    return null;
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decryptedToken = CryptoJS.AES.decrypt(token, "token").toString(
        CryptoJS.enc.Utf8
      );
      api.defaults.headers.common["Authorization"] = `Bearer ${decryptedToken}`;
    } else {
      signOut();
    }
  }, []);

  useEffect(() => {
    if (user) {
      const encryptedUser = CryptoJS.AES.encrypt(
        JSON.stringify(user),
        "user"
      ).toString();
      localStorage.setItem("user", encryptedUser);
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  async function signIn(userCredentials: LoginParams) {
    try {
      const response = await login(userCredentials);
      api.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
      setUser(response.user);
      const encryptToken = CryptoJS.AES.encrypt(
        response.token,
        "token"
      ).toString();
      const encryptUser = CryptoJS.AES.encrypt(
        JSON.stringify(response.user),
        "user"
      ).toString();
      localStorage.setItem("token", encryptToken);
      localStorage.setItem("user", encryptUser);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          toast.error("Usuário ou senha inválidos");
        } else {
          toast.error("Ocorreu um erro inesperado, tente novamente mais tarde");
        }
      }
    }
  }

  const getUserData = async () => {
    try {
      const userData = await getMe();
      setUser(userData);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Usuário não autenticado");
          signOut();
          throw redirect({ to: "/painel/login" });
        } else {
          toast.error(
            "Ocorreu um erro inesperado ao tentar recuperar suas informações"
          );
        }
      }
    }
  };

  async function validationLoginFromGOVBR({
    descryptedToken,
    descryptedAuth,
  }: ValidationLoginFromGOVBR) {
    if (descryptedToken && descryptedAuth === "1") {
      const encryptedToken = CryptoJS.AES.encrypt(
        descryptedToken,
        "token"
      ).toString();
      localStorage.setItem("token", encryptedToken);
      api.defaults.headers.common["Authorization"] =
        `Bearer ${descryptedToken}`;
      await getUserData();
      throw redirect({ to: "/painel" });
    } else {
      throw redirect({ to: "/painel/login" });
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  function isLogged() {
    const token = localStorage.getItem("token");
    if (token) return true;
    return false;
  }

  function getUser(): User | null {
    const user = localStorage.getItem("user");
    if (user) {
      const decryptedUser = CryptoJS.AES.decrypt(user, "user");
      const convertUser = decryptedUser.toString(CryptoJS.enc.Utf8);
      const userData = JSON.parse(convertUser);
      return userData;
    }
    return null;
  }

  async function updateUserCPF(cpf: string) {
    try {
      await saveCpf(cpf);
      const user = await getMe();
      setUser(user);
      updateUserStorage(user);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Usuário não autenticado");
          signOut();
        } else {
          toast.error(
            "Ocorreu um erro inesperado ao tentar recuperar suas informações"
          );
        }
      }
    }
  }

  function updateUserStorage(user: User) {
    const userStorage = localStorage.getItem("user");
    const decryptedUser = CryptoJS.AES.decrypt(userStorage || "", "user");
    const convertUser = decryptedUser.toString(CryptoJS.enc.Utf8);
    const userData = JSON.parse(convertUser);
    userData.cpf = user.cpf;
    userData.nickname = user.cpf;
    const encryptedUser = CryptoJS.AES.encrypt(
      JSON.stringify(userData),
      "user"
    ).toString();
    localStorage.setItem("user", encryptedUser);
  }

  return {
    signIn,
    signOut,
    isLogged,
    getUser,
    validationLoginFromGOVBR,
    getUserData,
    updateUserCPF,
    user,
  };
};

export type AuthContext = ReturnType<typeof useAuth>;
