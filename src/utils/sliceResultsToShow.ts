export function sliceResultsLengthForCards<T>(
  results: T[],
  maxCardsToShow: number = 16,
) {
  return results.length > maxCardsToShow
    ? results.slice(0, maxCardsToShow)
    : results;
}
