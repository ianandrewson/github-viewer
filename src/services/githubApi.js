const request = (path) => {
  return fetch(`https://api.github.com${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const fetchUser = username => request(`/users/${username}`);
export const fetchRepos = username => request(`/users/${username}/repos`);
export const fetchRepoPulls = (username, repoName) => request(`/repos/${username}/${repoName}/pulls`);
