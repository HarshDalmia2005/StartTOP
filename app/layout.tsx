import type { Metadata } from "next";
import { Geist, Geist_Mono,Work_Sans } from "next/font/google";
import "./globals.css";
import "easymde/dist/easymde.min.css";  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const work_sans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StartTOP",
  description: "Pitch your startup idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
