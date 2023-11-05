export function sliceResultsLengthForCards<T>(results: T[]) {
  const maxCardsToShow = 16;
  return results.length > maxCardsToShow
    ? results.slice(0, maxCardsToShow)
    : results;
}
