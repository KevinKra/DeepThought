import { COLLECT_CARDS } from "../actions/card-actions";
import { rando } from "../../helpers";
import { UPDATE_ALL_CARDS } from "../actions/card-actions";
//reducer for cards
export default function cardsReducer(state = [], { type, payload }) {
  switch (type) {
    case COLLECT_CARDS:
      return rando(payload);
    case UPDATE_ALL_CARDS:
      return payload;
    default:
      return state;
  }
}
