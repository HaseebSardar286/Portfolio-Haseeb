import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Haseeb Sardar | Associate Software Engineer",
  description:
    "Portfolio of Muhammad Haseeb Sardar — Associate Software Engineer at ConcaveTech. Full-stack developer (Angular, React, Node.js) and ML practitioner (XGBoost, Scikit-learn) based in Lahore, Pakistan.",
  keywords: ["Muhammad Haseeb Sardar", "Associate Software Engineer", "Full Stack Developer", "Machine Learning", "Angular", "React", "Node.js", "Python", "Lahore"],
  authors: [{ name: "Muhammad Haseeb Sardar" }],
  openGraph: {
    title: "Muhammad Haseeb Sardar | Associate Software Engineer",
    description:
      "Building scalable full-stack apps and ML-powered solutions. Open to new opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[#000319]">{children}</body>
    </html>
  );
}
