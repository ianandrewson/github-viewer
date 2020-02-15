import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions';



export default function GithubViewer() {

  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [username]);

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
