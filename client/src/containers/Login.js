import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/user.actions";

class Login extends React.Component {
  login = React.createRef();
  password = React.createRef();

  handleLogin = e => {
    e.preventDefault();

    this.props.loginUser(this.login.current.value, this.password.current.value);

    //TODO: fix with redux router
    // this.props.history.push("/");
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
  { loginUser }
)(Login);
