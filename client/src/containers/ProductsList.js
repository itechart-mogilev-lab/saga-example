import React from "react";
import { Link } from "react-router-dom";

export default class ProductsList extends React.Component {
  state = {
    list: [
      { id: 1, description: "Product #1", price: 13.2, count: 55 },
      { id: 2, description: "Product #2", price: 4, count: 5522 },
      { id: 3, description: "Product #3", price: 113.2, count: 43 },
      { id: 4, description: "Product #4", price: 11.6, count: 14 },
      { id: 5, description: "Product #5", price: 13.3, count: 5 }
    ]
  };
  render() {
    return (
      <>
        <h2>Products list</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Price</th>
              <th>#</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.count}</td>
                <td>
                  <button onClick={this.buy}>Buy</button>
                  <Link to={"/products/" + p.id}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
