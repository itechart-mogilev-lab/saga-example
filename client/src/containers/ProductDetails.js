import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { productLoaded } from "../actions/products.actions";

class ProductDetails extends React.Component {
  buy = () => {
    alert("buy");
  };

  componentDidMount() {
    axios.get("/api/products/" + this.props.match.params.id).then(response => {
      this.props.productLoaded(response.data);
    });
  }

  getLoadingState = () => <div>Loading....</div>;

  render() {
    const p = this.props.product;
    return !p.id ? (
      this.getLoadingState()
    ) : (
      <>
        <h2>Product Details, ID={this.props.match.params.id}</h2>
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{p.id}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{p.description}</td>
            </tr>
            <tr>
              <td>Details</td>
              <td>{p.longDescription}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{p.price}</td>
            </tr>
            <tr>
              <td>Available in stock</td>
              <td>{p.count}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.buy}>Buy</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { productLoaded }
)(ProductDetails);
