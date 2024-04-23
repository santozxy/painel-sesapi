import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils";
import { ThemeSwitcher } from "@components";

import Header from "./components/Header";
import Painel from "./pages/Painel";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/painel",
    element: <Painel />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
