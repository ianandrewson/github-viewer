import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, getUserInfo } from '../actions/userActions';
import { selectUsername } from '../selectors/userSelectors';
import UserInfo from '../components/userInfo/UserInfo';

export default function GithubViewer() {

  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const handleUserChange = ({ target }) => {
    dispatch(setUser(target.value));
  };

  const submitUsername = () => {
    dispatch(getUserInfo(username));
  };

  return (
    <>
      <input type="text" placeholder="username" onChange={handleUserChange}/>
      <button onClick={submitUsername}>Find User</button>
      <UserInfo />
    </>
  );
}
