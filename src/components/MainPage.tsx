"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import CurrentWork from "../components/currentWork";

export default function MainPage() {
  return (
    <>
      <div className="flex items-center justify-center px-10 py-20 space-x-6">
        <div className="flex flex-col gap-6 max-w-[600px]">
          <div className="flex text-7xl text-foreground flex-wrap">
            Hello, I am{" "}
            <h1 className="text-primary px-4 font-extrabold">Aidan</h1>
          </div>
          <div className="text-2xl">
            <TypeAnimation
              sequence={[
                1000,
                "Passionate Software Engineer",
                1000,
                "Passionate Student",
                1000,
                "Passionate Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="/Aidan_Clark_Resume.png"
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/80 transition"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/aidanclarko"
              className="px-6 py-3 border border-primary text-primary font-bold rounded-xl shadow-lg hover:bg-primary/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-4 w-[280px] shadow-2xl">
          <img
            src="/aidan.JPG"
            alt="Aidan"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        <div className="bg-card rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-semibold text-primary mb-4 ">
            About Me
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            I’m a Computer Science student and software engineer passionate
            about building practical tools and clean user experiences. I’ve
            worked on projects ranging from web apps in React and Next.js,
            Applications in Dart and Flutter, and Automation Tools. Currently
            focused on software. Always curious, always learning.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-semibold text-primary mb-4">
            Work Experience
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            My work experience includes Audio Video Installation, Full Stack
            Software Engineering (using SQL, React, Typescript, and API Router
            TRPC), and Devops Projects working with AWS Servers, Bash Scripts
            and Big Data Problems in MySQL Databases.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-semibold text-primary mb-4">
            My Passion
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            My passion is to learn and expand my knowledge of computer science.
            A specific goal of mine currently is to further understand LLMs and
            create a meaningful app or web application. Outside of computer
            science, I have a strong passion for backpacking.
          </p>
        </div>
      </div>

      <div className="p-10 flex justify-center">
        <CurrentWork />
      </div>
    </>
  );
}
