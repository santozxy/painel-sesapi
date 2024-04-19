import { createFileRoute } from "@tanstack/react-router";
import { Painel } from "@pages";

export const Route = createFileRoute("/painel")({
  component: () => <Painel />,
});
