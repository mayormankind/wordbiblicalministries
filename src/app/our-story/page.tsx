import OurStory from "@/views/OurStory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Word Biblical Ministries",
  description: "Discover the journey and history of Word Biblical Ministries under divine calling.",
};

export default function Page() {
  return <OurStory />;
}
