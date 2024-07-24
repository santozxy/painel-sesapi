import { createFileRoute } from "@tanstack/react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@components";
//import { useAuth } from "@hooks";
import { useState } from "react";
import { Lock, User } from "lucide-react";
import { z } from "zod";

import { toast } from "react-toastify";
import { descryptItem } from "@utils";

const searchSchema = z.object({
  auth: z.string().optional(),
  nickname: z.number().optional().or(z.string().optional()),
});

export const Route = createFileRoute("/login")({
  validateSearch: searchSchema,
  beforeLoad: ({ search }) => {
    if (search.auth?.length) {
      const descryptAuth = descryptItem(search.auth);
      if (descryptAuth === "0") {
        toast.error("Ocorreu um erro ao tentar logar com o GOV BR", {
          toastId: String(search.auth),
        });
      }
    }
  },
  component: Login,
});

interface Inputs {
  user: string;
  password: string;
  nickname: string;
}

export function Login() {
  const { auth, nickname } = Route.useSearch();
  const descryptAuth = descryptItem(auth ?? "");
  //const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = Route.useNavigate();

  const { register, handleSubmit } = useForm<Inputs>({});
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    if (nickname) {
      const descryptNickname = descryptItem(nickname as string);
      data.nickname = String(descryptNickname);
    }
    try {
      await navigate({ to: "/painel" });
      //await signIn(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[url('@assets/SESAPI.png')] bg-no-repeat bg-cover bg-left grid grid-cols-1 h-screen">
      <div className="flex flex-col items-center justify-center py-12">
        <div className="mx-auto grid w-[380px] p-4 gap-6 rounded-md bg-background shadow-lg shadow-black/20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2.5 text-center border-b pt-2 pb-4">
              <h1 className="text-3xl font-bold">Painel SESAPI</h1>
              {descryptAuth !== "2" && (
                <p className="text-balance text-muted-foreground">
                  Faça login para acessar o painel
                </p>
              )}
              {descryptAuth === "2" && (
                <div className="p-2 bg-blue-800/90 rounded-md ">
                  <p className="text-balance text-zinc-50 font-semibold ">
                    Primeiro acesso, complete o cadastro!
                  </p>
                </div>
              )}
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-1.5" />
                    <label htmlFor="email" className="font-medium ">
                      Usuário
                    </label>
                  </div>
                </div>
                <input
                  className="ring-0 border outline-none p-2 max-sm:w-full rounded-md  sm:text-base text-zinc-900  "
                  id="email"
                  autoComplete="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("user")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 mr-1.5" />
                  <label htmlFor="password" className="font-medium  ">
                    Senha
                  </label>
                </div>
                <input
                  className="ring-0 border  outline-none p-2 max-sm:w-full rounded-md sm:text-base bg-secondary  text-zinc-900  dark:text-zinc-100"
                  id="password"
                  type="password"
                  security="true"
                  placeholder="********"
                  autoComplete="current-password"
                  {...register("password")}
                  required
                />
              </div>
              {/*
              <div className="grid gap-2">
                <div className="flex items-center">
                  <List className="w-5 h-5 mr-1.5" />
                  <label htmlFor="organ">Orgão</label>
                </div>
                 <select
                  {...register("organ")}
                  id="organ"
                  className="ring-0 border outline-none p-2 max-sm:w-full rounded-md sm:text-base text-zinc-900 bg-secondary dark:text-zinc-100"
                  required
                >
                  {organsData.records?.map((item) => (
                    <option key={item.id} value={item.id} className="">
                      {item.description}
                    </option>
                  ))}
                </select>
              </div> */}

              <Button type="submit" title="Entrar" loading={loading} />

              {descryptAuth !== "2" && (
                <div className="flex items-center gap-4 justify-between">
                  <hr className=" h-0.5 w-full bg-primary" />
                  <p className="text-center text-sm text-muted-foreground">
                    OU
                  </p>
                  <hr className=" h-0.5 w-full bg-primary" />
                </div>
              )}
            </div>
          </form>
          {descryptAuth !== "2" && (
            <a
              className="bg-blue-800/90 text-background dark:text-foreground flex items-center justify-center p-2 rounded-md hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50 shadow-lg gap-1"
              href={import.meta.env.VITE_API_LOGIN_URL}
            >
              <span>Entrar com</span>
              <span className="font-bold">GOV BR</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
