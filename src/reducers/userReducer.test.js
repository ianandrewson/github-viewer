import { 
  setUser,
  FETCH_USER_INFO, 
  FETCH_USER_INFO_LOADING
} from '../actions/userActions';
import reducer from './userReducer';


describe('user reducer tests', () => {
  it('should set user to state', () => {
    const initialState = { username: '' };
    const action = setUser('testUser');
    
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ username: 'testUser' });
  });

  it('can handle the FETCH_USER_INFO_LOADING action', () => {
    const action = { type: FETCH_USER_INFO_LOADING };
    const initialState = { loading: false };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ loading: true });
  });

  it('should handle fetch user info, set to state', () => {
    const action = { 
      type: FETCH_USER_INFO,
      payload: { full_name: 'Tom Vik', location: 'SF' }
    };
    const initialState = { userInfo: null, username: 'Tom', loading: true };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ 
      username: 'Tom', 
      userInfo: {
        full_name: 'Tom Vik',
        location: 'SF'
      },
      loading: false
    });
  });
});
