"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components";
import Terminal from "../components/Terminal";
import { GoTerminal } from "react-icons/go";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "aidan.dev",
  description: "Aidan Clark's Personal Website",
};

function Nav() {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const buttonItems = [
    { name: "Resume", id: "/resume" },
    // { name: "Projects", id: "/projects" },
    // { name: "Contact", id: "/contact" },
    { name: "More to Come", id: "/nothing" },
  ];

  const router = useRouter();
  return (
    <>
      <div className="fixed top-0 w-full z-50 h-24 rounded-b-md text-6xl font-bold flex items-center px-9 justify-between flex-row bg-foreground text-background">
        <div className="">
          <h1
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer ml-30"
          >
            aidanclark.dev
            <Button
              className="p-1 rounded-md hover:bg-amber-50/40 transition mr-96"
              onClick={() => setShowTerminal(true)}
            >
              {" "}
              <GoTerminal color={"green"} size={40} />
              {""}
            </Button>
          </h1>
        </div>
        <div className="space-x-4 text-3xl mr-20">
          {buttonItems.map((item) => (
            <Button
              className="hover:bg-primary rounded-xl p-1"
              key={item.id}
              onClick={() => {
                router.push(item.id);
              }}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>

      {showTerminal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Terminal onClose={() => setShowTerminal(false)} />
        </div>
      )}
    </>
  );
}

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
