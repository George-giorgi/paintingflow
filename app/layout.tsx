import type { Metadata } from "next";

import { montserrat } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[#121212]  text-white`}
      >
        {children}
      </body>
    </html>
  );
}
