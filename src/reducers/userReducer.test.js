import { 
  setUser,
  FETCH_USER_INFO 
} from '../actions/userActions';
import reducer from './userReducer';


describe('user reducer tests', () => {
  it('should set user to state', () => {
    const initialState = { username: '' };
    const action = setUser('testUser');
    
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ username: 'testUser' });
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
