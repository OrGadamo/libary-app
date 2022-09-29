import {
  UPDATE_ACTION,
  DELETE_ACTION,
  ADD_ACTION,
} from "../types/book-actions-types";
export const updateAction = (bookData) => {
  return { type: UPDATE_ACTION, payload: bookData };
};
export const deleteAction = (bookId) => {
  return { type: DELETE_ACTION, payload: bookId };
};
export const addAction = (bookData) => {
  return { type: ADD_ACTION, payload: bookData };
};
