import type { Metadata } from "next";
import AboutWBM from "@/views/AboutWBM";

export const metadata: Metadata = {
  title: "About WBM",
  description:
    "Learn the story, mission, values, and leadership behind Word Biblical Ministries.",
};

export default function AboutWBMPage() {
  return <AboutWBM />;
}
