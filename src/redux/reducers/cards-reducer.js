import { COLLECT_CARDS } from "../actions/card-actions";
import { rando } from "../../helpers";

//reducer for cards
export default function cardsReducer(state = [], { type, payload }) {
  switch (type) {
    case COLLECT_CARDS:
      return rando(payload);
    default:
      return state;
  }
}
