import React from "react";

import { Router, Route, Switch, useHistory, withRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


import Start from "./components/Start";
import Questions from "./components/Questions";
import Results from "./components/Result";


function App() {
  return (
    <Router history={history}>
      <Switch>

        <Route exact path="/" component={Start}/>
        <Route exact path="/questions" component={Questions}/>
        <Route exact path="/results" component={Results}/>
      </Switch>
    </Router>
  );
}

export default App;
