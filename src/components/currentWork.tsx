"use client";
import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
};

export default function CurrentWork() {
  const [repo, setRepo] = useState<Repo | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/aidanclarko/repos?sort=updated&per_page=1"
    )
      .then((res) => res.json())
      .then((data) => setRepo(data[0]));
  }, []);

  if (!repo) return <p>Loading...</p>;

  return (
    <div className="bg-foreground p-5 rounded-xl shadow-md w-[400px]">
      <h2 className="text-xl font-bold text-background">
        Currently Working On
      </h2>
      <p className="mt-2 text-lg text-primary font-semibold">{repo.name}</p>
      <p className="text-sm text-background">{repo.description}</p>
      <a
        href={repo.html_url}
        target="_blank"
        className="text-secondary hover:underline mt-3 inline-block"
      >
        View on GitHub →
      </a>
    </div>
  );
}
