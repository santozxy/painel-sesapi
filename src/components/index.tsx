import { lazy } from "react";
import { Loading } from "./Loading";
import { ThemeSwitcher } from "./SwitcherTheme";
import { ToastContainerStyle } from "./ToastContainerStyle";
import { ScrollPage } from "./ScrollPage";

const Header = lazy(() => import("./Header"));
const SearchBar = lazy(() => import("./SearchBar"));
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
  ScrollPage,
};
