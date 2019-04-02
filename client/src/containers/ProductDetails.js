import React from "react";
import { connect } from "react-redux";
import { loadProduct } from "../actions/products.actions";

class ProductDetails extends React.Component {
  buy = () => {
    alert("buy");
  };

  componentDidMount() {
    this.props.loadProduct(this.props.match.params.id);
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
  { loadProduct }
)(ProductDetails);
