import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/search';
import Saved from './pages/saved';
import Nav from './components/nav';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <Router>
    <Nav />
    <Jumbotron />
    <Switch>
      {/* This is where the main page routes will go.  */}
      <Route exact path= "/">
        <div className="container">
        <Search />

        </div>
      </Route>
      <Route exact path="/saved">
        <div className="container">
        <Saved />

        </div>
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
