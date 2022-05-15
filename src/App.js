import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from "react-router-dom";

import Start from "./components/Start";
import Questions from "./components/Questions";
import Results from "./components/Result";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Start}></Route>
        <Route path="/questions" component={Questions}></Route>
        <Route path="/results" component={Results}></Route>
      </Router>
    </Provider>
  );
}

export default App;


//useSelector: pega o estado e pega state.
///Provider: é o componente que recebe a store e a passa, automaticamente, para todos os filhos, possibilitando que eles a escutem