import type { Metadata } from "next";
import Ministries from "@/views/Ministries";

export const metadata: Metadata = {
  title: "Ministries of WBM",
  description:
    "See how Word Biblical Ministries serves churches, theological institutions, and campus fellowships.",
};

export default function MinistriesPage() {
  return <Ministries />;
}
