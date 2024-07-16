import axios from "axios";

export async function fetchGithubRepositories(token: string) {
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

    return topRepos.map((repo: any) => ({
      id: repo.id,
      url: repo.html_url, // Use html_url instead of url for the repository URL
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
    }));
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
