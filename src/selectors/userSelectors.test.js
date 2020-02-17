import { selectUsername, selectLoading, selectUserInfo, selectUserRepos } from './userSelectors';

describe('user selector test', () => {
  it('can select username from state', () => {
    const state = { user: { username: 'Cheryl' } };
    const result = selectUsername(state);
    expect(result).toEqual('Cheryl');
  });

  it('can select loading from state', () => {
    const state = { user: { loading: true } };
    const result = selectLoading(state);
    expect(result).toEqual(true);
  });

  it('can select userInfo from state', () => {
    const state = { user: { userInfo: { full_name: 'Bob', location: 'SF' } } };
    const result = selectUserInfo(state);
    expect(result).toEqual({ full_name: 'Bob', location: 'SF' });
  });

  it('can select userRepos from state', () => {
    const state = { user: { username: 'Ernie McGregz', userRepos: [
      { name: 'repo1', id: 1234 }
    ] } };
    const result = selectUserRepos(state);
    expect(result).toEqual([{ name: 'repo1', id: 1234 }]);
  });
});
