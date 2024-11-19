"use client";
import React, { useEffect, useState } from "react";
import { fetchGithubRepositories } from "@/utils/github";
import RepoCard from "@/components/ui/RepoCard";

type Repository = {
  id: number;
  url: string;
  name: string;
  description: string | null;
  stars: number;
  languages: { name: string; percentage: number }[];
};

const ProjectsPage = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN ?? "";
        const githubRepos = await fetchGithubRepositories(token);

        const transformedRepos: Repository[] = githubRepos.map((repo) => ({
          id: repo.id,
          url: repo.url,
          name: repo.name,
          description: repo.description,
          stars: repo.stars,
          languages: repo.languages || [], // This needs to be populated from a separate API call
        }));

        setRepositories(transformedRepos);
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
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-white">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo) => (
            <RepoCard
              key={repo.id}
              url={repo.url}
              name={repo.name}
              description={repo.description || ""}
              stars={repo.stars}
              languages={repo.languages}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
