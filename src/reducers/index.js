import { combineReducers } from 'redux';
import user from './userReducer.js';
import repo from './repoReducer.js';

export default combineReducers({
  user,
  repo
});
