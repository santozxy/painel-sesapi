import { lazy } from "react";
import { Loading } from "./loading-search";
import { ThemeSwitcher } from "./switcher-theme";
import { ToastContainerStyle } from "./toast-container-style";
import { ScrollPage } from "./scroll-page";
import { Button } from "./button";
import { NotFound } from "./not-found";
import { DialogRegisterCPF } from "./dialog-register-cpf";
import { DropdownMenuInfo } from "./dropdown-menu-info";

const Header = lazy(() => import("./header"));
const SearchBar = lazy(() => import("./search-bar"));
const ListCards = lazy(() => import("./list-cards"));
const TableProcess = lazy(() => import("./table-process"));
const BoxDurationProcess = lazy(() => import("./box-duration-process"));

export {
  BoxDurationProcess,
  Header,
  ListCards,
  Loading,
  SearchBar,
  TableProcess,
  ThemeSwitcher,
  ToastContainerStyle,
  ScrollPage,
  DialogRegisterCPF,
  DropdownMenuInfo,
  Button,
  NotFound,
};
