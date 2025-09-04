"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components";
import Terminal from "../../components/Terminal";
import { GoTerminal } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger icons

export default function Nav() {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const buttonItems = [
    { name: "Projects", id: "/projects" },
    { name: "Contact", id: "/contact" },
  ];

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
            {buttonItems.map((item) => (
              <Button
                key={item.id}
                className="hover:bg-primary rounded-xl px-3 py-1 transition"
                onClick={() => router.push(item.id)}
              >
                {item.name}
              </Button>
            ))}
            <Button
              className="p-2 rounded-md hover:bg-amber-50/40 transition"
              onClick={() => setShowTerminal(true)}
            >
              <GoTerminal color="green" size={28} />
            </Button>
          </div>

          <div className="flex items-center md:hidden space-x-2">
            <Button
              className="p-2 rounded-md hover:bg-amber-50/40 transition"
              onClick={() => setShowTerminal(true)}
            >
              <GoTerminal color="green" size={24} />
            </Button>
            <Button
              className="p-2 rounded-md hover:bg-amber-50/40 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-foreground text-lg shadow-inner">
            {buttonItems.map((item) => (
              <Button
                key={item.id}
                className="hover:bg-primary rounded-xl px-3 py-2 w-32 text-center"
                onClick={() => {
                  setMenuOpen(false);
                  router.push(item.id);
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
        )}
      </nav>

      {showTerminal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Terminal onClose={() => setShowTerminal(false)} />
        </div>
      )}
    </>
  );
}
