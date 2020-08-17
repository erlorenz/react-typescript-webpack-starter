import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

const test: string = "sdfdsf";
const error = test.map(() => "wsdfads");

ReactDOM.render(<App />, document.getElementById("root"));
