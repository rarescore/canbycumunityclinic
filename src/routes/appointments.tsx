import { createFileRoute } from "@tanstack/react-router";
import { AppointmentsPage } from "@/components/site/appointments-page";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Request an appointment | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Call (818) 674-4414 or send only the contact details needed to schedule a visit at Canby Community Clinic in Reseda. Do not include medical information.",
      },
    ],
  }),
  component: AppointmentsPage,
});
