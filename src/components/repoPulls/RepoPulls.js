import React from 'react';
import { useSelector } from 'react-redux';
import { selectRepoPulls } from '../../selectors/repoSelectors';

export default function RepoPulls() {

  const pulls = useSelector(selectRepoPulls);

  if(!pulls){
    return <h3>Please select a repo</h3>;
  }

  const pullElements = pulls.map((pull, i) => (
    <li key={i}>
      <p>Number: {pull.number}</p>
      <p>Title: {pull.title}</p>
      <p>State: {pull.state}</p>
      <a href={pull.html_url}>Link</a>
    </li>
  ));

  return (
    <ul>
      {pullElements}
    </ul>
  );
}
