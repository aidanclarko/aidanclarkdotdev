"use client";

import React, { useState } from "react";
import { Button } from "react-aria-components";
import { motion, AnimatePresence } from "framer-motion";

type ContainerProps = {
  title: string;
  description: string;
  stack: string[];
  gitLink: string;
};

export default function ProjectContainer({
  title,
  description,
  stack,
  gitLink,
}: ContainerProps) {
  const tabs = [
    {
      id: 1,
      label: "Description",
      content: <p className="flex justify-center">{description}</p>,
    },
    {
      id: 2,
      label: "GitHub",
      content: (
        <div className="flex justify-center">
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on GitHub
          </a>
        </div>
      ),
    },
    {
      id: 3,
      label: "Stack",
      content: (
        <div className="flex gap-2 flex-wrap justify-center ">
          {stack.map((s, i) => (
            <img key={i} src={s} alt={s} className="h-8 w-8 object-contain" />
          ))}
        </div>
      ),
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="bg-foreground rounded-xl p-4 shadow-lg">
      <h1 className="text-2xl font-extrabold text-background text-center">
        {title}
      </h1>
      <div className="relative flex gap-2 mt-4 justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onPress={() => setActive(tab.id)}
            className={`relative px-3 py-1 bg-secondary font-bold rounded w-15 md:w-full transition-colors ${
              active === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded"
              />
            )}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            <div className="p-4 text-background rounded shadow-sm">
              {tabs.find((t) => t.id === active)?.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
