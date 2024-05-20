import AboutPage from "./About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
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


export default function About() {
  return <AboutPage />;
}
