import "./App.css";
import BooksPage from "./components/pages/BooksPage";
import BooksContext from "./context/BooksContext";

function App() {
  return (
    <div className="App">
      Hello World!
      <BooksContext>
        <BooksPage />
      </BooksContext>
    </div>
  );
}

export default App;
