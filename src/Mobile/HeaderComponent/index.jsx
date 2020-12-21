import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img style={{ width: 110 }} src="./img/logo.jpg" alt="logo" />
          <span className="mx-5">CYBERSOFT</span>
          <img style={{ width: 110 }} src="./img/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FORUM
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
