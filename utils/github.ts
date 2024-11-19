import axios from "axios";

type Language = {
  name: string;
  percentage: number;
};

type Repository = {
  id: number;
  url: string;
  name: string;
  description: string | null;
  stars: number;
  languages: Language[];
};

type LanguageData = {
  [key: string]: number;
};

export async function fetchGithubRepositories(
  token: string,
): Promise<Repository[]> {
  try {
    let allRepos: any[] = [];
    let page = 1;
    let hasMoreRepos = true;

    while (hasMoreRepos) {
      const response = await axios.get(
        "https://api.github.com/users/redyf/repos",
        {
          headers: {
            Authorization: `token ${token}`,
          },
          params: {
            per_page: 25,
            page: page,
          },
        },
      );

      if (response.data.length > 0) {
        allRepos = allRepos.concat(response.data);
        page++;
      } else {
        hasMoreRepos = false;
      }
    }

    const sortedRepos = allRepos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count,
    );

    const topRepos = sortedRepos.slice(0, 7);

    const reposWithLanguages = await Promise.all(
      topRepos.map(async (repo) => {
        try {
          const languagesResponse = await axios.get<LanguageData>(
            repo.languages_url,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            },
          );

          const languagesData = languagesResponse.data;
          const totalBytes = Object.values(languagesData).reduce(
            (sum, bytes) => sum + bytes,
            0,
          );

          const languages = Object.entries(languagesData)
            .map(([name, bytes]) => ({
              name,
              percentage: Math.round((bytes / totalBytes) * 100),
            }))
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 5);

          return {
            id: repo.id,
            url: repo.html_url,
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            languages,
          };
        } catch (error) {
          return {
            id: repo.id,
            url: repo.html_url,
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            languages: [],
          };
        }
      }),
    );

    return reposWithLanguages;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch Github repositories: ${error.response?.data?.message || error.message}`,
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
