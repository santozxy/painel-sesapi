import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { App } from "./App";

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
