import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import styled from "styled-components";

const App: React.FC = () => {
  console.log("You are in", process.env.NODE_ENV, "mode!!");

  return (
    <Router>
      <Switch>
        <Route path="/">
          <H1>Welcome to the starter!!</H1>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

const H1 = styled.h1`
  color: blue;
`;
