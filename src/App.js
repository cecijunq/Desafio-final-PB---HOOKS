import React from "react";

import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from "react-router-dom";

import Start from "./components/Start";
import Questions from "./components/Questions";
import Results from "./components/Result";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route path="/questions" component={Questions}></Route>
        <Route path="/results" component={Results}></Route>
      </Switch>
    </Router>
  );
}

export default App;
