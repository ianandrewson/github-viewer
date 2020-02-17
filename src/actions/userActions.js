import { fetchUser, fetchRepos } from '../services/githubApi';

export const SET_USER = 'SET_USER';
export const setUser = payload => ({ type: SET_USER, payload });

export const FETCH_USER_INFO_LOADING = 'FETCH_USER_INFO_LOADING';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const getUserInfo = username => dispatch => {
  dispatch({ type: FETCH_USER_INFO_LOADING });
  return fetchUser(username)
    .then(userInfo => dispatch({
      type: FETCH_USER_INFO,
      payload: userInfo
    }));
};

export const FETCH_USER_REPOS = 'FETCH_USER_REPOS';
export const getUserRepos = username => dispatch => {
  return fetchRepos(username)
    .then(userRepos => dispatch({
      type: FETCH_USER_REPOS,
      payload: userRepos
    }));
};
