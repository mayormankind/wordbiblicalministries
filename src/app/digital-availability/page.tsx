import type { Metadata } from "next";
import DigitalAvailability from "@/views/DigitalAvailability";

export const metadata: Metadata = {
  title: "Digital Availability of AFINT",
  description:
    "Learn where to access AFINT digitally and how the translation is available worldwide.",
};

export default function DigitalAvailabilityPage() {
  return <DigitalAvailability />;
}
