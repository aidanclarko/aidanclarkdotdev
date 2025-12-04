"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components";
import Terminal from "../../components/Terminal";
import { GoTerminal } from "react-icons/go";

export default function Nav() {
  const [showTerminal, setShowTerminal] = useState(false);

  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-foreground text-background shadow-md  h-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          <h1
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer font-bold text-3xl md:text-5xl"
          >
            aidanclark.dev
          </h1>

          <div className="hidden md:flex items-center space-x-8 text-xl">

            <Button
              className="p-2 rounded-md hover:bg-amber-50/40 transition"
              onClick={() => setShowTerminal(true)}
            >
              <GoTerminal color="green" size={45} />
            </Button>
          </div>

          <div className="flex items-center md:hidden space-x-2">
            <Button
              className="p-2 rounded-md hover:bg-amber-50/40 transition"
              onClick={() => setShowTerminal(true)}
            >
              <GoTerminal color="green" size={25} />
            </Button>
          </div>
        </div>
      </nav>

      {showTerminal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Terminal onClose={() => setShowTerminal(false)} />
        </div>
      )}
    </>
  );
}
