import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { userLoginSuccess } from "../actions/user.actions";
import { storeToken } from "../authentication";

class Login extends React.Component {
  login = React.createRef();
  password = React.createRef();

  handleLogin = e => {
    e.preventDefault();

    // ASYNC CALL
    axios
      .post("/api/login", {
        login: this.login.current.value,
        password: this.password.current.value
      })
      .then(response => {
        this.props.userLoginSuccess(response.data.token, response.data.user);
        storeToken(response.data.token, response.data.user);
        this.props.history.push("/");
      });

    return false;
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label htmlFor="txtLogin">Login</label>
        <input
          type="text"
          name="login"
          id="txtLogin"
          required
          ref={this.login}
        />
        <br />
        <label htmlFor="txtPassword">Password</label>
        <input
          type="password"
          name="password"
          id="txtPassword"
          required
          ref={this.password}
        />
        <br />

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default connect(
  null,
  { userLoginSuccess }
)(Login);
