import React from "react";
import ReactDOM from "react-dom";

import Model from "./Model";

import "./App.css";

function App() {
    return <Model />;

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
