import React, { Component } from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper className="navbar navbar-expand-lg navbar-dark bg-purple">
        <NavLink exact to="/" className="navbar-brand">
          <img src={logo} className="app-logo" alt="Logo" />
          <span className="navbar-brand-name ml-3">Aureola</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars white-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-fill justify-content-center">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" activeClassName="active" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="ml-auto">
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart white-icon"></i>
            </NavLink>
          </div>
        </div>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  .navbar-brand-name {
    margin-top: 0.1rem;
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
    position: absolute;
  }
  .nav-link {
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`;
