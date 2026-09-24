import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/routes/location";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Canby Community Clinic is at 7601 Canby Ave #6B, Reseda. Weekdays 9–5. Call (818) 674-4414 for parking and the entrance. Do not email medical information.",
      },
    ],
  }),
  component: LocationPage,
});
