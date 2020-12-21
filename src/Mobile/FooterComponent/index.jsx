import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#343a40" }}>
        <h1 className="display-3 text-center text-white pt-5 mb-5 font-weight-bold">
          PROMOTION
        </h1>
        <div className="container" style={{ height: 250 }}>
          <div className="row p-5 bg-white">
            <div className="col-4">
              <img className="w-100" src="./img/promotion_1.png" />
            </div>
            <div className="col-4">
              <img className="w-100" src="./img/promotion_2.png" />
            </div>
            <div className="col-4">
              <img className="w-100" src="./img/promotion_3.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
