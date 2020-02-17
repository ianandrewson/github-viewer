import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, getUserInfo, getUserRepos } from '../actions/userActions';
import { selectUsername } from '../selectors/userSelectors';
import UserInfo from '../components/userInfo/UserInfo';
import styles from './GithubViewer.css';

export default function GithubViewer() {

  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const handleUserChange = ({ target }) => {
    dispatch(setUser(target.value));
  };

  const submitUsername = () => {
    dispatch(getUserInfo(username));
    dispatch(getUserRepos(username));
  };

  return (
    <div className={styles.viewer}>
      <input type="text" placeholder="username" onChange={handleUserChange}/>
      <button onClick={submitUsername}>Find User</button>
      <UserInfo />
    </div>
  );
}
