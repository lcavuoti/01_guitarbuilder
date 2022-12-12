import React from "react";
import ReactDOM from "react-dom";

import Model from "./Model";

import "./App.css";

class App extends React.Component {
  render() {
    return <Model />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
