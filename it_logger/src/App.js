import React, { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      Rob's App
    </div>
  );
};

export default App;
