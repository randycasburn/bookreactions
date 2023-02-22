import "./App.css";
import BookList from "./features/books/BookList";
import Navigation from "./features/common/Navigation";
import ReviewList from "./features/reviews/ReviewList";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import About from "./features/about/About";

const staticServer = process.env.NODE_ENV === "production";

const routes = (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<BookList />} />
      <Route path="about" element={<About />} />
      <Route path="/reviews/:bookId/:title" element={<ReviewList />} />
    </Route>
  </Routes>
);

function App() {
  if (staticServer) {
    return <HashRouter>{routes}</HashRouter>;
  } else {
    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}

export default App;
