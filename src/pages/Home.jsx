import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Hopping Frogs</h1>
        <Link to="/game/lobby">Click to start</Link>
      </header>
    </div>
  )
}

export default Home;
