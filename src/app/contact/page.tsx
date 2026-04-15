import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Word Biblical Ministries for inquiries, partnership, and prayer requests.",
};

export default function ContactPage() {
  return <Contact />;
}
