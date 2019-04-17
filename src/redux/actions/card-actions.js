export const COLLECT_CARDS = "collectCards";
export const UPDATE_ALL_CARDS = "updateAllCards";

export function collectAllCards(cardsList) {
  return {
    type: COLLECT_CARDS,
    payload: cardsList
  };
}

export function updateAllCards(cardsList) {
  return {
    type: UPDATE_ALL_CARDS,
    payload: cardsList
  };
}
