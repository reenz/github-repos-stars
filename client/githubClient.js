const axios = require('axios');

class GithubClient {
  constructor() {
    this.githubURL = "https://api.github.com/repos"
  }

  async getStars(user, repo) {
    const repoURL = `${this.githubURL}/${user}/${repo}`
    try {
      const apiResp = await axios.get(repoURL);
      const stars = apiResp.data.stargazers_count;
      return ({'user': user, 'repo': repo, 'stars': stars});
    } catch (error) {
      return ({
        'error': error.toString()
      });
    }
  }
}
module.exports = GithubClient;