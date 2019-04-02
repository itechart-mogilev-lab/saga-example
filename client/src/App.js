import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Profile from "./containers/Profile";
import ProductsList from "./containers/ProductsList";
import ProductDetails from "./containers/ProductDetails";
import AuthStatus from "./containers/AuthStatus";
import Login from "./containers/Login";

class App extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <>
        <header>
          <h1>Redux-Saga demo</h1>
          <nav>
            <NavLink to="/products">Products</NavLink>
            {isAuthenticated ? <NavLink to="/profile">Profile</NavLink> : null}
          </nav>
          <AuthStatus />
        </header>
        <Switch>
          <Route path="/products" exact component={ProductsList} />
          <Route path="/products/:id" component={ProductDetails} />
          {isAuthenticated ? (
            <Route path="/profile" component={Profile} />
          ) : null}
          {!isAuthenticated ? <Route path="/login" component={Login} /> : null}
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
