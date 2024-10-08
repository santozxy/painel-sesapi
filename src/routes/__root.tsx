import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
  redirect,
} from "@tanstack/react-router";
import { NotFound } from "@components";
import { AuthContext } from "@hooks";
import { z } from "zod";
import { descryptItem } from "@utils";

type RouterContext = {
  authentication: AuthContext;
};

const SearchSchema = z.object({
  token: z.string().catch("").optional(),
  auth: z.string().optional(),
  nickname: z.number().optional().or(z.string().optional()),
});

export const Route = createRootRouteWithContext<RouterContext>()({
  validateSearch: SearchSchema,
  beforeLoad: async ({ context, search }) => {
    const currentPath = location.pathname;
    const { token, auth, nickname } = search;
    const descryptedAuth = descryptItem(auth || "");
    const descryptedToken = descryptItem(token || "");
    const isLogged = context.authentication.isLogged();
    const { validationLoginFromGOVBR } = context.authentication;

    if (!isLogged && currentPath !== "/painel/login") {
      if (descryptedAuth === "0") {
        throw redirect({ to: "/painel/login", search: { auth: auth } });
      }
      if (nickname) {
        throw redirect({ to: "/painel/login", search: { nickname, auth } });
      }

      await validationLoginFromGOVBR({
        descryptedToken,
        descryptedAuth,
      });
    }
    if (isLogged && currentPath !== "/painel") {
      throw redirect({ to: "/painel" });
    }
  },
  component: () => {
    return (
      <div className="flex w-full flex-col">
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Outlet />
      </div>
    );
  },
  notFoundComponent: () => <NotFound />,
});
