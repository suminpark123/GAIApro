import React from "react";

class Shop extends React.Component {
  componentDidMount() {
    console.log("Testtest");
    console.log("Test" + this.props.imgs);
  }
  render() {
    return (
      <div className="col-md-4">
        <img
          src={require("../../assets/img/products/그라인_소프트셰르파더블자켓.png")}
        />
        <h4>{this.props.product}</h4>
        <p>{this.props.point}</p>
        <p>{this.props.brand}</p>
        <p style={{ marginBottom: "100px" }}>{this.props.price}</p>
      </div>
    );
  }
}

export default Shop;
