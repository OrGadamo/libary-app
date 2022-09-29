import { screen, render } from "@testing-library/react";
import BooksPage from "./BooksPage";
describe("tests for BooksPage component", () => {
  it("check if container with valid class", () => {
    render(<BooksPage />);
    const linkElement = screen.getByTestId("book_page_container");
    expect(linkElement).toHaveClass("books-page");
  });
  it("check headline text", () => {
    render(<BooksPage />);
    const linkElement = screen.getByTestId("book_page_headline");
    expect(linkElement.innerHTML).toEqual("BooksPage");
  });
  it("check if container is not empty", () => {
    render(<BooksPage />);
    const linkElement = screen.getByTestId("book_page_container");
    expect(linkElement).not.toBeEmptyDOMElement();
  });
});
