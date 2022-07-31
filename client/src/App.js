import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import FourOFour from "./Components/FourOFour";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
import NotLoggedIn from "./Components/NotLoggedIn";

function App() {
  const isLoggedIn = document.cookie.length > 0;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

          <Route
            exact
            path="/cart"
            element={isLoggedIn ? <Cart /> : <NotLoggedIn />}
          ></Route>
          <Route
            exact
            path="/account"
            element={isLoggedIn ? <Account /> : <NotLoggedIn />}
          ></Route>

          <Route path="*" element={<FourOFour />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
