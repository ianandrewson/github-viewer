import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions';



export default function GithubViewer() {

  const dispatch = useDispatch();
  const handleUser = ({ target }) => {
    dispatch(setUser(target.value));
  };

  return (
    <>
      <input type="text" placeholder="username" onChange={handleUser}/>
      <button >Find User</button>
    </>
  );
}
