import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./component/book";
import FormBook from "./component/book/component/FormBook";
import Admin from "./component/admin/Admin";
import Dish from "./component/dish";
import IntroduceEndComment from "./component/IntroduceEndComment";
import "./App.css";
import { useEffect } from "react";
import Menu from "./component/menu/Menu";

function App() {
  useEffect(() => {
  }, []);
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" exact element={<IntroduceEndComment />}></Route>
        <Route exact path="/view" element={<Book />} />
        <Route exact path="/dishs" element={<Dish />} />
        <Route exact path="/book" element={<FormBook />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route
          exact
          path="/introduce-end-comment"
          element={<IntroduceEndComment />}
        />
      </Routes>
    </div>
  );
}

export default App;
