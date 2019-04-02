import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../actions/user.actions";
import { clearToken } from "../authentication";

class AuthStatus extends React.Component {
  getAnonymousView = () => (
    <div>
      <Link to="/login">Login</Link>
    </div>
  );

  getUserView = user => (
    <div>
      Hello, {user.name}.
      <button
        onClick={() => {
          this.props.userLogout();
          clearToken();
        }}
      >
        Logout
      </button>
    </div>
  );

  render() {
    return this.props.isAuthenticated
      ? this.getUserView(this.props.user)
      : this.getAnonymousView();
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.isAuthenticated,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { userLogout }
)(AuthStatus);
