import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

import Link from "./components/Link";

import List from "./pages/List";
import Quiz from "./pages/Quiz";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
