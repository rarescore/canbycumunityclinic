import { createFileRoute } from "@tanstack/react-router";
import { GivePage } from "@/routes/give";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Donate to Canby Community Clinic in Reseda. One-time or monthly. Card, Apple Pay, or PayPal.",
      },
    ],
  }),
  component: GivePage,
});
