import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadProducts } from "../actions/products.actions";

class ProductsList extends React.Component {
  componentDidMount() {
    if (this.props.list.length === 0) this.props.loadProducts();
  }

  getLoadingState = () => <div>Loading....</div>;

  render() {
    const list = this.props.list;

    return !list.length ? (
      this.getLoadingState()
    ) : (
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
            {list.map(p => (
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

const mapStateToProps = state => ({
  list: state.products.list
});

export default connect(
  mapStateToProps,
  { loadProducts }
)(ProductsList);
