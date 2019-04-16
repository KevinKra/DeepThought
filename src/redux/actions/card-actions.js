export const COLLECT_CARDS = "collectCards";

export function collectAllCards(cardsList) {
  return {
    type: COLLECT_CARDS,
    payload: cardsList
  };
}
