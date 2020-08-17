import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

console.log(`The value of process.env.TEST is ${process.env.TEST}`);

ReactDOM.render(<App />, document.getElementById("root"));
