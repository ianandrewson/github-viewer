import { 
  setUser, 
  SET_USER, 
  getUserInfo,
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO,
  FETCH_USER_REPOS,
  getUserRepos
} from './userActions';

jest.mock('../services/githubApi.js');

describe('user action tests', () => {
  it('creates an action to set the user', () => {
    const action = setUser('testUser');
    expect(action).toEqual({ type: SET_USER, payload: 'testUser' });
  });

  it('creates an action to fetch user information', () => {
    const dispatch = jest.fn();
    const action = getUserInfo('Bob Instigator');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER_INFO_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER_INFO,
          payload: {
            login: 'instigator',
            name: 'Bob Instigator',
            loaction: 'Portland, Oregon'
          }
        });
      });
  });

  it('creates an action to fetch user repos', () => {
    const dispatch = jest.fn();
    const action = getUserRepos('mehtanight');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER_REPOS,
          payload: [
            { 
              name: 'repo1',
              description: 'repo1'
            },
            {
              name: 'repo2',
              description: 'repo2'
            }
          ]
        });
      });
  });

  it('creates an action to fetch a repos pull requests', () => {
    const dispatch = jest.fn();
    const action = getRepoPulls('repo-name');
    
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPO_PULLS_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          action: FETCH_REPO_PULLS,
          payload: [
            { number: 1, state: 'open', title: 'best new feature', link: 'blah' },
            { number: 2, state: 'closed', title: 'other new feature', link: 'blahblah' }
          ]
        });
      });
  });
});
