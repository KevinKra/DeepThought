import { COLLECT_CARDS } from "../actions/card-actions";

//reducer for cards
export default function cardsReducer(state = [], { type, payload }) {
  switch (type) {
    case COLLECT_CARDS:
      return payload;
    default:
      return state;
  }
}
