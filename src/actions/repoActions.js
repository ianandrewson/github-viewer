import { fetchRepoPulls } from '../services/githubApi';

export const FETCH_REPO_PULLS_LOADING = 'FETCH_REPO_PULLS_LOADING';
export const FETCH_REPO_PULLS = 'FETCH_REPO_PULLS';
export const getRepoPulls = (username, repoName) => dispatch => {
  dispatch({ type: FETCH_REPO_PULLS_LOADING });
  return fetchRepoPulls(username, repoName)
    .then(pulls => dispatch({
      type: FETCH_REPO_PULLS,
      payload: pulls
    }));
};
