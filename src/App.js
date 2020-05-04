import React from "react";
import "./App.css";
import Home from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./component/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/single/:id">
          <SinglePage />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
