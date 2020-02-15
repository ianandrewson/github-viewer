import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading, selectUserInfo } from '../../selectors/userSelectors';
import RepoDetails from '../repoDetails/RepoDetails';

export default function UserInfo() {

  const loading = useSelector(selectLoading);
  const userInfo = useSelector(selectUserInfo);

  if(loading) {
    return <h1>loading</h1>;
  } else if(!loading && !userInfo) {
    return <h1>Use the search box to look for a user!</h1>;
  }

  const location = userInfo.email || 'No given city';
  const email = userInfo.email || 'No given email address';

  return (
    <>
      <section>
        <p>Name: {userInfo.name}</p>
        <p>Username: {userInfo.login}</p>
        <p>Link to profile: {userInfo.html_url}</p>
        <p>City: {location}</p>
        <p>Email: {email}</p>
        <p>Number of followers: {userInfo.followers}</p>
      </section>
      <br />
      <RepoDetails />
    </>
  );
}
