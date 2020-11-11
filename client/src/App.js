import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/search';
import Saved from './pages/saved';

function App() {
  return (
    <Router>
    <div>
      Nav will go here. 
    </div>
    <div>
      Big ole header will go here. 
    </div>
    <Switch>
      {/* This is where the main page routes will go.  */}
      <Route exact path= "/">
        <Search />
      </Route>
      <Route exact path="/saved">
        <Saved />
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
