import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/new-patients")({
  beforeLoad: () => {
    throw redirect({ to: "/visit" });
  },
});
