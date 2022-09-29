import { screen, render } from "@testing-library/react";
import BooKCard from "./BooKCard";
describe("tests for BookCard Components", () => {
  it("check for container element in page", () => {
    render(<BooKCard />);
    const linkElement = screen.getByTestId("book_card_container");
    expect(linkElement).toBeInTheDocument();
  });
  it("check container class", () => {
    render(<BooKCard />);
    const linkElement = screen.getByTestId("book_card_container");
    expect(linkElement).toHaveClass("boo-kcard");
  });
  it("check text in headline", () => {
    render(<BooKCard />);
    const linkElement = screen.getByTestId("book_card_headline");
    expect(linkElement.innerHTML).toEqual("BooKCard");
  });
});
