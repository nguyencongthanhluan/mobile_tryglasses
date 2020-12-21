import React, { Component } from "react";
import "./style.css";

let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

class Glasses extends Component {
  state = {
    glass: "",
    name: "",
    desc: "",
  };

  changeGlasses = (item) => () => {
    this.setState({
      glass: item.url,
      name: item.name,
      desc: item.desc,
    });
  };
  renderGlasses = () => {
    return arrProduct.map((item) => {
      return (
        <span>
          <img
            style={{ width: 110 }}
            src={item.url}
            onClick={this.changeGlasses(item)}
          />
        </span>
      );
    });
  };
  render() {
    return (
      <div
        className="backGround"
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 700,
        }}
      >
        <div className="overlay">
          <div style={{ backgroundColor: "#00000057", padding: "1rem" }}>
            <h1 className="display-5 text-white text-center">
              TRY GLASSES APP ONLINE
            </h1>
          </div>
          <div className="container" style={{ height: 560 }}>
            <div className="row mt-5">
              <div className="col-6 text-center">
                <div className="img">
                  <img
                    className="w-50"
                    src="./glassesImage/model.jpg"
                    alt="model"
                  />
                  <div className="tryGlasses">
                    <img
                      style={{ width: 154, opacity: 0.7 }}
                      src={this.state.glass}
                      alt=""
                    />
                  </div>
                  <div className={this.state.name == "" ? "" : "content"}>
                    <h6
                      className={
                        this.state.name == "" ? "d-none" : "glass-title"
                      }
                    >
                      {this.state.name}
                    </h6>
                    <p
                      className={
                        this.state.desc == "" ? "d-none" : "glass-content"
                      }
                    >
                      {this.state.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 text-center">
                <img
                  className="w-50"
                  src="./glassesImage/model.jpg"
                  alt="model"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-5 mt-5 bg-white text-center glasses">
                {this.renderGlasses()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Glasses;
