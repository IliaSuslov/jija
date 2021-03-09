import React from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/home/home.jsx';
import Resin from './screens/resin/resin.jsx';
import Json from './screens/json.jsx';
import Resins from './screens/resin/resins.jsx';
import Compare from './screens/compare/compare.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/compare">
          <Compare />
        </Route>
        <Route path="/resins">
            <Resins />
        </Route>
        <Route path="/resin/:id">
            <Resin />
        </Route>
        <Route path="/json">
            <Json />
          </Route>
     
        <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
