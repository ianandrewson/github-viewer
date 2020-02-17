import { selectRepoPulls } from './repoSelectors';

describe('repo selector tests', () => {
  it('should be able to select repo pull request details from state', () => {
    const state = { repo: { repoPulls: 'pull test' } };
    const result = selectRepoPulls(state);
    expect(result).toEqual('pull test');
  });
});
