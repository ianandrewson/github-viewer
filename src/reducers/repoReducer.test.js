import { FETCH_REPO_PULLS_LOADING, FETCH_REPO_PULLS } from '../actions/repoActions';
import reducer from './repoReducer';

describe('repo reducer tests', () => {
  it('can handle the FETCH_REPO_PULLS_LOADING action', () => {
    const initialState = { repoPulls: [], loading: false };
    const action = { type: FETCH_REPO_PULLS_LOADING };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ repoPulls: [], loading: true });
  });

  it('can handle the FETCH_REPO_PULLS action', () => {
    const initialState = { repoPulls: [], loading: true };
    const action = { 
      type: FETCH_REPO_PULLS,
      payload: [
        { number: 1, state: 'open', title: 'best new feature', link: 'blah' },
        { number: 2, state: 'closed', title: 'other new feature', link: 'blahblah' }]
    };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ loading: false, repoPulls: [
      { number: 1, state: 'open', title: 'best new feature', link: 'blah' },
      { number: 2, state: 'closed', title: 'other new feature', link: 'blahblah' }
    ] });
  });
});
