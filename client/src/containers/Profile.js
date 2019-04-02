import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends React.Component {
  state = {
    givenName: "Ruslan",
    familyName: "Kutynko",
    orders: [
      { id: 1, description: "Product #1", price: 13.2, date: new Date() },
      { id: 2, description: "Product #2", price: 4, date: new Date() },
      { id: 3, description: "Product #3", price: 113.2, date: new Date() }
    ]
  };
  render() {
    return (
      <>
        <h2>Profile</h2>

        <img alt="avatar" src="/" width="200" height="200" />
        <div>
          <h3>Personal info</h3>
          <table>
            <tbody>
              <tr>
                <td>Given name:</td>
                <td>{this.state.givenName}</td>
              </tr>
              <tr>
                <td>Family name:</td>
                <td>{this.state.familyName}</td>
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
              {this.state.orders.map(o => (
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

export default connect()(Profile);
