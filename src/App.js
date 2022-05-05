import React from "react";

import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Start from "./components/Start";
import Questions from "./components/Questions";
import Results from "./components/Result";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={Start}/>
      <Route exact={true} path="/questions" component={Questions}/>
      <Route path="/results" component={Results}/>
    </Router>
  );
}

export default App;
