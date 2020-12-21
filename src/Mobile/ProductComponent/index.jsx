import React, { Component } from "react";

class Product extends Component {
  render() {
    const { img, name, desc } = this.props.item;
    return (
      <div className="text-center">
        <div className="card p-3" style={{ height: 500 }}>
          <div>
            <img
              className="w-100"
              style={{ height: 275 }}
              src={img}
              alt="mobile"
            />
          </div>
          <div className="mt-3" style={{ height: 130 }}>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
          <div>
            <button className="btn btn-primary mx-2 w-25">Detail</button>
            <button className="btn btn-danger mx-2 w-25">Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
