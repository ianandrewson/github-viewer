describe('repo selector tests', () => {
  it('should be able to select repo pull request details from state', () => {
    const state = { pulls: 'pull test' };
    const result = selectPulls(state);
    expect(result).toEqual('pull test');
  });
});
