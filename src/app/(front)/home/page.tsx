import HomePage from "./Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
  keywords: [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Next SEO",
    "Next API",
    "Next Navigation",
    "Next Config",
    "Next Tailwind",
    "Next TypeScript",
    "Next.js Tailwind CSS",
    "Next.js TypeScript",
    "Next.js Tailwind CSS TypeScript",
  ],
};

export default function Home() {
  return <HomePage />;
}
