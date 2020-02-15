import { 
  setUser, 
  SET_USER, 
  getUserInfo,
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO
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
});
