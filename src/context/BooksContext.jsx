import { createContext, useReducer } from "react";
import booksReducer from "../store/reducers/book-reducer";

export const BooksContext = createContext();
export default function BooksContext({ children }) {
  const [booksState, setBooksState] = useReducer(booksReducer, []);
  return (
    <BooksContext.Provider value={{ booksState, setBooksState }}>
      {children}
    </BooksContext.Provider>
  );
}
