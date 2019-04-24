import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/styles/app.css";

import Master from "./components/Master/Master";
import MasterFR from "./components/Master/MasterFR";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Master} />
            <Route exact path="/fr" component={MasterFR} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
