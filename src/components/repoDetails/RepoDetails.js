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
      <p>{repo.html_url}</p>
      {<p>Description: {repo.description || 'No description given' }</p>}
    </li>
  ));

  return (
    <ul>
      {repoItems}
    </ul>
  );
}
