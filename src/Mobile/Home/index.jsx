import React, { Component } from "react";
import Header from "../HeaderComponent";
import Carousel from "../SliderComponent";
import ProductList from "../ProductListComponent";
import Footer from "../FooterComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default Home;
