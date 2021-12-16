import { api } from './network';

const GitHubAPI = {
  async searchUsers(query) {
    const { data } = await api.get('search/users', {
      params: {
        accept: 'application/vnd.github.v3+json',
        q: query
      }
    });
    return data.items;
  }
};

export default GitHubAPI;
