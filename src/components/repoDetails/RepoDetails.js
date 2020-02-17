import React from 'react';
import { selectUserRepos, selectUsername } from '../../selectors/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { getRepoPulls } from '../../actions/repoActions';
import RepoPulls from '../repoPulls/RepoPulls';
import styles from './RepoDetails.css';

export default function RepoDetails() {
  const username = useSelector(selectUsername);
  const repos = useSelector(selectUserRepos);
  const dispatch = useDispatch();

  
  if(!repos) {
    return <h3>Loading Repos</h3>;
  }
  
  const handleButtonClick = ({ target }) => {
    dispatch(getRepoPulls(username, target.value));
  };

  const repoItems = repos.map((repo, i) => (
    <li key={i}>
      <p>Name: {repo.name}</p>
      <a href={repo.html_url}>Link</a>
      <p>Description: {repo.description || 'No description given' }</p>
      <button value={repo.name} onClick={handleButtonClick}>See Repo Details</button>
    </li>
  ));

  return (
    <>
      <ul className={styles.repoDetails}>
        {repoItems}
      </ul>
      <RepoPulls />
    </>
  );
}
