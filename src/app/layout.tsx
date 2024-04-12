import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/Providers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobify - Connecting Talents with Opportunities",
  description:
    "Jobify is a premier job board platform, connecting talented individuals with job opportunities in various industries. Find your dream job today.",
  keywords: [
    "job board",
    "job search",
    "job listings",
    "jobify",
    "jobs",
    "careers",
    "employment",
    "hiring",
    "recruitment",
    "job openings",
    "job opportunities",
    "jobify",
    "jobify.com",
    "jobify job board",
    "jobify job listings",
    "jobify careers",
    "jobify employment",
    "jobify hiring",
    "jobify recruitment",
    "jobify job openings",
    "jobify job opportunities",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[360px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
