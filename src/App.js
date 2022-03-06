import React, { Fragment } from "react";
import Header from "./components/header/header";
import { GiphyList } from "./components/list/listGiphy";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <GiphyList />
    </Fragment>
  );
}

export default App;
