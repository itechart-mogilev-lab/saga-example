import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";

import Profile from "./containers/Profile";
import ProductsList from "./containers/ProductsList";
import ProductDetails from "./containers/ProductDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Redux-Saga demo</h1>
          <nav>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/products" exact component={ProductsList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
