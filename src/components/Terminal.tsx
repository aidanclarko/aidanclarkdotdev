import React, { useState } from "react";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { GrHelpBook } from "react-icons/gr";
import TerminalInternals from "./terminal_content/TerminalInternals";

const listOfCommands = [
  { cmd: "curl -o resume.pdf", desc: "Download my resume" },
  { cmd: "grep Aidan", desc: "Check my about me" },
  { cmd: "ls/cd", desc: "Use it to navigate the site!" },
  { cmd: "help", desc: "that might be why you're here" },
];

type TerminalProps = {
  onClose?: () => void;
};

export default function Terminal({ onClose }: TerminalProps) {
  const termButtons = [
    { name: "-", id: "minus" },
    { name: "x", id: "exit" },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-20 z-40">
        <div className="w-[75vw] h-[30vw] rounded-xl shadow-2xl shadow-foreground bg-foreground flex flex-col">
          <div className="flex items-center justify-between px-4 text-background text-xl font-bold bg-primary w-full rounded-t-xl h-12 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span>Terminal</span>
              <DialogTrigger>
                <Button className="hover:bg-foreground p-1 rounded-md">
                  <GrHelpBook />
                </Button>
                <Modal className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                  <Dialog className="bg-primary p-6 rounded-xl shadow-xl max-w-lg w-[90%] text-background">
                    <h2 className="text-lg font-bold mb-4">
                      Available Commands
                    </h2>
                    <div className="flex flex-col gap-3">
                      {listOfCommands.map((cmd) => (
                        <div key={cmd.cmd} className="flex flex-col">
                          <span className="text-green-400 font-mono">
                            {cmd.cmd}
                          </span>
                          <span className="text-sm text-gray-200">
                            {cmd.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      slot="close"
                      className="mt-10 text-background font-bold"
                    >
                      Close
                    </Button>
                  </Dialog>
                </Modal>
              </DialogTrigger>
            </div>
            <div className="space-x-2 flex flex-row">
              {termButtons.map((items) => (
                <Button
                  key={items.id}
                  onClick={onClose}
                  className="hover:bg-gray-500 rounded-md h-5 w-5 flex items-center justify-center"
                >
                  {items.name}
                </Button>
              ))}
            </div>
          </div>
          <TerminalInternals />
        </div>
      </div>
      )
    </>
  );
}
