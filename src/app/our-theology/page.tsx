import type { Metadata } from "next";
import OurTheology from "@/views/OurTheology";

export const metadata: Metadata = {
  title: "Our Theology",
  description:
    "Explore the doctrinal convictions and Gospel foundations that shape Word Biblical Ministries.",
};

export default function OurTheologyPage() {
  return <OurTheology />;
}
