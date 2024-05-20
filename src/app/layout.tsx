//Root Layout

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import PrelineScript from "./components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | WorkShop",
    default: "WorkShop",
  },
  description: "WorkShop is a platform for developers to share their projects.",
  keywords: [
    "WorkShop",
    "projects",
    "developers",
    "code",
    "programming",
    "web development",
    "Tailwind CSS",
    "Next.js",
  ],
  authors: [{ name: "panutthon", url: "https://github.com/panutthon" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <PrelineScript /> */}
    </html>
  );
}
