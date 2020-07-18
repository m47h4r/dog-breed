import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Link from "./components/Link";

import List from "./pages/List";
import Quiz from "./pages/Quiz";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Index</Link>
        <Link to="/list">Breed List</Link>
        <Link to="/quiz">Breed Quiz</Link>
      </nav>
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
