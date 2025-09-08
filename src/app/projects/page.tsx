"use client";
import React from "react";
import ProjectContainer from "@/components/projectComp/ProjectContainer";

export default function Projects() {
  return (
    <>
      <div className="flex flex-row min-w-full min-h-full">
        <ProjectContainer
          title={"dart flutter app"}
          description={"shit ass app that does nothing its shit"}
        />
      </div>
    </>
  );
}
