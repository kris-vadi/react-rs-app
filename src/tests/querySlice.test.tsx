import { initialState, querySlice } from '../store/slises/querySlise';

describe('Tests for query Slice', () => {
  it('should return default state when passed an empty action', () => {
    const result = querySlice.reducer(undefined, { type: undefined });
    expect(result).toEqual(initialState);
  });

  it('should add new page number with setPage', () => {
    const updatedState = querySlice.reducer(
      initialState,
      querySlice.actions.setPage(5)
    );

    expect(updatedState.page).toEqual(5);
  });

  it('should add new page limit with setPageLimit', () => {
    const updatedState = querySlice.reducer(
      initialState,
      querySlice.actions.setPageLimit('20')
    );

    expect(updatedState.pageLimit).toEqual('20');
  });

  it('should add new search value with setSearchValue', () => {
    const updatedState = querySlice.reducer(
      initialState,
      querySlice.actions.setSearchValue('test')
    );

    expect(updatedState.searchInputValue).toEqual('test');
  });
});
