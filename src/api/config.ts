import axios, { AxiosInstance } from "axios";

const config = {
  prod: {
    baseURL: import.meta.env.VITE_BASE_URL,
  },
  demo: {
    baseURL: import.meta.env.VITE_DEMO_BASE_URL,
  },
};

function createApiInstance(params: { baseURL: string }) {
  const instance = axios.create({
    baseURL: params.baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }) as AxiosInstance;

  return instance;
}


export const api = createApiInstance(config.demo);

