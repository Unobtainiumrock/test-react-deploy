import React from "react";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
