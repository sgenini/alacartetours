import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/styles/app.css";

import Master from "./components/Master/Master";
import French from "./components/Master/French";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Master} />
            <Route exact path="/fr" component={French} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
