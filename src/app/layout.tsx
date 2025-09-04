import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Nav from "../components/nav/Nav";

export const metadata: Metadata = {
  title: "Aidan Clark",
  description: "Aidan Clark's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
