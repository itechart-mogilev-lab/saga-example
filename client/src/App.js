import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { Provider } from "react-redux";
import reduxStore, { history } from "./redux";
import { initializePreviousToken } from "./authentication";

import "./App.css";

import Profile from "./containers/Profile";
import ProductsList from "./containers/ProductsList";
import ProductDetails from "./containers/ProductDetails";
import AuthStatus from "./containers/AuthStatus";
import Login from "./containers/Login";

initializePreviousToken(reduxStore);

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router history={history}>
          <header>
            <h1>Redux-Saga demo</h1>
            <nav>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </nav>
            <AuthStatus />
          </header>
          <Switch>
            <Route path="/products" exact component={ProductsList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
