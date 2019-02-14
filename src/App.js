import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layout
import NavBar from "./Components/layout/NavBar";
import Footer from "./Components/layout/Footer";

// Pages
import Home from "./Components/pages/Home";
import NotFound from "./Components/pages/NotFound";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />

            {/* Not Found */}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
