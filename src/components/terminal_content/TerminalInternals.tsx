import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type HistoryEntry = {
  command: string;
  output: string;
};

function useBlinker(interval = 500) {
  const [blinker, setBlinker] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlinker((prev) => !prev);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return blinker ? "text-foreground" : "text-green-500";
}

export default function TerminalInternals() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aidan_Clark_Resume.png";
    link.download = "Aidan_Clark_Resume.png";
    link.click();
  };

  const handleCommand = (cmd: string) => {
    let result = "";
    if (cmd.toLowerCase() === "help") {
      result = "click ? to see current commands";
      setHistory((prev) => [...prev, { command: cmd, output: result }]);
    } else if (cmd.toLowerCase() === "grep aidan") {
      result =
        "Name: Aidan Clark \n Role: Audio/Video Tech & Developer\n Skills: React, TypeScript, Python, C++, SQL\nFun Fact: Loves the outdoors";
      setHistory((prev) => [...prev, { command: cmd, output: result }]);
    } else if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
    } else if (cmd.toLowerCase() === "curl -o resume.pdf") {
      setTimeout(() => {
        result = "downloaded resume!";
        setHistory((prev) => [...prev, { command: cmd, output: result }]);
      }, 1200);
      downloadResume();
    } else if (cmd === "cd /resume") {
      router.push("/resume");
    } else if (cmd === "ls") {
      result = "/resume /projects /about /contact";
      setHistory((prev) => [...prev, { command: cmd, output: result }]);
    } else {
      result = `Command not found: ${cmd}`;
      setHistory((prev) => [...prev, { command: cmd, output: result }]);
    }
    setInput("");
  };

  const blinkColor = useBlinker(1000);

  return (
    <div
      ref={terminalRef}
      className="text-green-500 text-xl p-4 flex-1 overflow-y-auto max-h-full"
    >
      {history.map((entry, idx) => (
        <div key={idx} className="mb-2">
          <div>
            <span className="font-bold">aidanclark in ~ </span>
            {entry.command}
          </div>
          <div className="pl-4 text-md whitespace-pre-line">
            <h1>{entry.output}</h1>
          </div>
        </div>
      ))}
      <div>
        <span className="font-bold">aidanclark in ~ </span>
        {!input && <span className={`cursor ${blinkColor} p-1`}>|</span>}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCommand(input);
            }
            if (e.ctrlKey && e.key === "c") {
              setHistory([]);
            }
          }}
          className="bg-foreground text-green-500 p-1 outline-none caret-transparent"
          autoFocus
        />
      </div>
    </div>
  );
}
