import React from "react";

import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from "react-router-dom";

import Start from "./components/Start";
import Questions from "./components/Questions";
import Results from "./components/Result";


function App() {
  return (
    <Router>
      {/* <Switch> */}

      <Route exact path="/questions"><Questions /></Route>
      <Route exact path="/results"> <Results /> </Route>
      <Route exact path="/"><Start /></Route>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
