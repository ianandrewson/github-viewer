import { 
  setUser, 
  SET_USER } from './userActions';


describe('user action tests', () => {
  it('creates an action to set the user', () => {
    const action = setUser();
    expect(action).toEqual({ type: SET_USER });
  });
});
