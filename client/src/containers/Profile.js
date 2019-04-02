import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../actions/user.actions";

class Profile extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }

  getLoadingState = () => <div>Loading....</div>;

  render() {
    const user = this.props.user;

    return !user.givenName ? (
      this.getLoadingState()
    ) : (
      <>
        <h2>Profile</h2>

        <img alt="avatar" src="/" width="200" height="200" />
        <div>
          <h3>Personal info</h3>
          <table>
            <tbody>
              <tr>
                <td>Given name:</td>
                <td>{user.givenName}</td>
              </tr>
              <tr>
                <td>Family name:</td>
                <td>{user.familyName}</td>
              </tr>
            </tbody>
          </table>
          <h3>Orders history</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>
                    <Link to={"/products/" + o.id}> {o.description}</Link>
                  </td>
                  <td>{o.price}</td>
                  <td>{o.date.toUTCString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { loadUser }
)(Profile);
