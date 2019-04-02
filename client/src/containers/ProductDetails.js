import React from "react";

export default class ProductDetails extends React.Component {
  state = {
    id: 1,
    shortDescription: "Product #1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis quo consectetur modi culpa repellendus beatae molestias iste excepturi, sint iusto cupiditate minus libero temporibus aliquam dolorem magni at veritatis!",
    price: 13.2,
    count: 55
  };

  buy = () => {
    alert("buy");
  };

  render() {
    const p = this.state;
    return (
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
