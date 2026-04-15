import type { Metadata } from "next";
import Give from "@/views/Give";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Word Biblical Ministries through secure giving and partnership opportunities.",
};

export default function GivePage() {
  return <Give />;
}
