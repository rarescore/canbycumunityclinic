import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/home-visit")({
  beforeLoad: () => {
    throw redirect({ to: "/appointments" });
  },
});
