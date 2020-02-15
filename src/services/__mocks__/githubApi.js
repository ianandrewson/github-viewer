export function fetchUser() {
  return Promise.resolve({
    login: 'instigator',
    name: 'Bob Instigator',
    loaction: 'Portland, Oregon'
  });
}

export function fetchRepos() {
  return Promise.resolve([
    { 
      name: 'repo1',
      description: 'repo1'
    },
    {
      name: 'repo2',
      description: 'repo2'
    }
  ]);
}
