import type { Metadata } from "next";
import AboutAFINT from "@/views/AboutAFINT";

export const metadata: Metadata = {
  title: "About AFINT",
  description:
    "Discover the African International New Testament translation project and its mission for the global Church.",
};

export default function AboutAFINTPage() {
  return <AboutAFINT />;
}
