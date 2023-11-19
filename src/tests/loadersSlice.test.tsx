import {
  initialState,
  cardsLoader,
  detailsLoader,
} from '../store/slises/loadersSlice';

describe('Tests for query Slice', () => {
  it('should return default state when passed an empty action', () => {
    const result = cardsLoader.reducer(undefined, { type: undefined });
    expect(result).toEqual(initialState);
  });

  it('should return correct value setCardsLoader', () => {
    const updatedState = cardsLoader.reducer(
      initialState,
      cardsLoader.actions.setCardsLoader(false)
    );

    expect(updatedState.value).toEqual(false);
  });
});

it('should return correct value setDetailsLoader', () => {
  const updatedState = detailsLoader.reducer(
    initialState,
    detailsLoader.actions.setDetailsLoader(false)
  );

  expect(updatedState.value).toEqual(false);
});
