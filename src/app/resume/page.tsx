"use client";

import React from "react";
import RenderResume from "../../components/renderResume";

export default function Resume() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center w-screen h-screen">
          <RenderResume />
        </div>
      </div>
    </>
  );
}
