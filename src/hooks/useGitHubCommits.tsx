import { useEffect, useState } from "react";

export interface Commit {
  id: string;
  repo: string;
  message: string;
  date: string;
  url: string;
}

const CACHE_KEY = "github_commits_cache";
const CACHE_TIME = 24 * 60 * 60 * 1000; // 24h
const USERNAME = "gustavitoo";

export function useGitHubCommits(limit: number = 12) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);

        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          const age = Date.now() - parsed.timestamp;

          if (age < CACHE_TIME && parsed.username === USERNAME) {
            setCommits(parsed.data);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(`commits.xml`);
        if (!response.ok) throw new Error("No se pudo cargar el feed del usuario");

        const xmlText = await response.text();

        const xml = new window.DOMParser().parseFromString(xmlText, "text/xml");
        const entries = Array.from(xml.querySelectorAll("entry")).slice(0, limit);

        const parsedCommits: Commit[] = entries.map((entry: any) => {
          const title = entry.querySelector("title")?.textContent || "Update";
          const updated = entry.querySelector("updated")?.textContent;
          const link = entry.querySelector("link")?.getAttribute("href") || "";

          const repo = link.split("/")[4] ?? "repo";

          const rawContent = entry.querySelector("content")?.textContent || "";

          const temp = document.createElement("div");
          temp.innerHTML = rawContent;

          const message =
            temp.querySelector("blockquote")?.textContent?.trim() ||
            title ||
            "Update";

          return {
            id: link,
            repo,
            message,
            date: new Date(updated).toLocaleDateString("es-ES", {
              month: "short",
              day: "numeric",
            }),
            url: link,
          };
        });

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: parsedCommits,
            USERNAME,
          })
        );

        setCommits(parsedCommits);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, [limit]);

  return { commits, loading, error };
}
