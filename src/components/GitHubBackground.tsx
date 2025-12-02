import GitHubCommitCard from "./GitHubCommitCard";
import { useGitHubCommits } from "../hooks/useGithubCommits";

export default function GitHubBackground() {
  const { commits } = useGitHubCommits();
  if (commits.length === 0) return null;

  return (
    <div className="absolute z-10 inset-0 top-60 overflow-hidden pointer-events-none select-none mask-image-b">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background z-20" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rotate-12 scale-110 origin-center transform translate-y-[-10%] translate-x-[-5%] z-10">
        {commits.map((commit, index) => (
          <div key={commit.id} className={index % 2 === 0 ? "translate-y-8" : ""}>
            <GitHubCommitCard {...commit} delay={index * 0.1} />
          </div>
        ))}
      </div>
    </div>
  );
}
