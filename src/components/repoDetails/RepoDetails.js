import React from 'react';
import { selectUserRepos } from '../../selectors/userSelectors';
import { useSelector } from 'react-redux';

export default function RepoDetails() {
  const repos = useSelector(selectUserRepos);

  if(!repos) {
    return <h3>Loading Repos</h3>;
  }
  
  const repoItems = repos.map((repo, i) => (
    <li key={i}>
      <p>Name: {repo.name}</p>
      <a>{repo.html_url}</a>
      <p>Description: {repo.description || 'No description given' }</p>
      <button>See Repo Details</button>
    </li>
  ));

  return (
    <ul>
      {repoItems}
    </ul>
  );
}
