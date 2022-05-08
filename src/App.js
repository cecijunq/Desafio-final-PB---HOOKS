import React from "react";

import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from "react-router-dom";


import Start from "./components/Start";
import Questions from "./components/Questions";
import Results from "./components/Result";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Start}/>
      <Route exact path="/questions" component={Questions}/>
      <Route exact path="/results" component={Results}/>
    </Router>
  );
}

export default App;
