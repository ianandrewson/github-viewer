import { 
  getRepoPulls, 
  FETCH_REPO_PULLS_LOADING, 
  FETCH_REPO_PULLS 
} from './repoActions';

jest.mock('../services/githubApi.js');

describe('repo actions tests', () => {
  it('creates an action to fetch a repos pull requests', () => {
    const dispatch = jest.fn();
    const action = getRepoPulls('repoMan', 'repo-name');
    
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPO_PULLS_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPO_PULLS,
          payload: [
            { number: 1, state: 'open', title: 'best new feature', link: 'blah' },
            { number: 2, state: 'closed', title: 'other new feature', link: 'blahblah' }
          ]
        });
      });
  });
});
