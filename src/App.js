import React from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Lobby from './pages/Lobby.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/game/lobby">
          <Lobby />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
