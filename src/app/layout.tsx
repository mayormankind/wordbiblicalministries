import type { Metadata } from "next";
import "@/index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://wordbiblicalministries.vercel.app"),
  title: {
    default: "Word Biblical Ministries",
    template: "%s | Word Biblical Ministries",
  },
  description:
    "Word Biblical Ministries strengthens the Church through prayer, faithful Bible translation, theological education, and Scripture-rooted ministry.",
  keywords: [
    "Word Biblical Ministries",
    "WBM",
    "AFINT",
    "Christian ministry",
    "Bible translation",
    "theology",
    "Nigeria ministry",
  ],
  openGraph: {
    title: "Word Biblical Ministries",
    description:
      "Prayer-dependent, Scripture-rooted ministry serving the Church through translation, commentary, and discipleship.",
    url: "https://wordbiblicalministries.vercel.app",
    siteName: "Word Biblical Ministries",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Biblical Ministries",
    description:
      "Prayer-dependent, Scripture-rooted ministry serving the Church through translation, commentary, and discipleship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-stone-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
