import { useAuth } from "@hooks";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { queryClient } from "@utils";
import { ToastContainer } from "react-toastify";
import { routeTree } from "./routeTree.gen";
import "react-toastify/dist/ReactToastify.css";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { authentication: undefined! },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  const authentication = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} context={{ authentication }} />
    </QueryClientProvider>
  );
}
