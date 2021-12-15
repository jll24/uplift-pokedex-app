import React from "react";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokeDetails from "./components/pages/PokeDetails";
import Home from "./components/pages/Home";
import PokeApp from "./components/pages/PokeApp";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/details/:url" element={<PokeDetails/>} />
            <Route path="/poke" element={<PokeApp/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default App;