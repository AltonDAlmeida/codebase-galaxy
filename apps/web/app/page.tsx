"use client";

import { useEffect, useState } from "react";

type Repo = { id: number; url: string; status: string };

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/repos")
      .then((res) => res.json())
      .then(setRepos)
      .catch(() => setError("Could not reach the API"));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Codebase Galaxy</h1>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      <ul className="mt-4 space-y-2">
        {repos.map((r) => (
          <li key={r.id}>
            {r.url} ({r.status})
          </li>
        ))}
      </ul>
    </main>
  );
}