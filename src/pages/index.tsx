
import { lazy } from "react";

const Painel = lazy(() => import("./Painel"));
const NotFound = lazy(() => import("./NotFound"));

export { Painel, NotFound };
