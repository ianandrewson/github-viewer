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

export function fetchRepoPulls() {
  return Promise.resolve([
    { number: 1, state: 'open', title: 'best new feature', link: 'blah' },
    { number: 2, state: 'closed', title: 'other new feature', link: 'blahblah' }
  ]);
}
