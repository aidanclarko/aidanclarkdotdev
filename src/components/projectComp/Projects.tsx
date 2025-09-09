"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectContainer from "@/components/projectComp/ProjectContainer";

const projects = [
  {
    gitLink: "https://github.com/aidanclarko/school_fitness_app",
    title: "Get Fit",
    description:
      "Application made in Dart/Flutter, collaborated with team members to create it.",
    stack: ["/dart.png", "/flutter.png"],
  },
  {
    gitLink: "https://github.com/aidanclarko/aidanclarkdotdev",
    title: "Personal Portfolio",
    description: "React + Next.js + TS project showcasing personal portfolio!.",
    stack: ["/react.png", "/ts.png"],
  },
  {
    gitLink: "https://github.com/aidanclarko/chess_engine_library",
    title: "Chess Engine Library",
    description:
      "C# Chess Library for future implementation within Unity. Basically Chess but you can cheat...",
    stack: ["/scharp.png"],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col items-center bg-card p-6 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">Projects</h1>

      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-2 md:left-0 p-3 md:p-2 bg-primary/20 hover:bg-primary/30 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
        </button>

        <div className="transition-all duration-500 ease-in-out w-full overflow-hidden">
          <ProjectContainer {...projects[index]} />
        </div>

        <button
          onClick={next}
          className="absolute right-2 md:right-0 p-3 md:p-2 bg-primary/20 hover:bg-primary/30 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-primary" />
        </button>
      </div>
      <div className="flex mt-4 space-x-2">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-primary" : "bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
