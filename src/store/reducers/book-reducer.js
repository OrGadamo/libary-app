import {
  ADD_ACTION,
  DELETE_ACTION,
  UPDATE_ACTION,
} from "../types/book-actions-types";
export default function booksReducer(state, action) {
  switch (action.type) {
    case ADD_ACTION:
      return;
    case UPDATE_ACTION:
      return;
    case DELETE_ACTION:
      return;
    default:
      return state;
  }
}
