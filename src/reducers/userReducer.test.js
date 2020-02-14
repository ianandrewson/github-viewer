import { setUser } from '../actions/userActions';
import reducer from './userReducer';


describe('user reducer tests', () => {
  it('should set user to state', () => {
    const initialState = '';
    const action = setUser('testUser');
    
    const newState = reducer(initialState, action);
    expect(newState).toEqual('testUser');
  });
});
