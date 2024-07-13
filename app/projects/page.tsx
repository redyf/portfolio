"use client";

import React, { useEffect, useState } from "react";
import { fetchGithubRepositories } from "@/utils/github";
import RepoCard from "@/components/ui/RepoCard";

interface Repository {
  id: number;
  url: string;
  name: string;
  description: string;
  stars: number;
}

const ProjectsPage = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN ?? "";
        const repos = await fetchGithubRepositories(token);
        setRepositories(repos);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4 text-white">Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repositories.map((repo) => (
          <RepoCard
            key={repo.id}
            url={repo.url}
            name={repo.name}
            description={repo.description}
            stars={repo.stars}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
