import { lazy } from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Loading } from "./Loading";
import { ThemeSwitcher } from "./SwitcherTheme";
import { ToastContainerStyle } from "./ToastContainerStyle";

const ListCards = lazy(() => import("./ListCards"));
const TableProcess = lazy(() => import("./TableProcess"));
const BoxDurationProcess = lazy(() => import("./BoxDurationProcess"));

export {
  BoxDurationProcess,
  Header,
  ListCards,
  Loading,
  SearchBar,
  TableProcess,
  ThemeSwitcher,
  ToastContainerStyle,
};
