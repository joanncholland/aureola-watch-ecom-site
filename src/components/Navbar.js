import React, { Component } from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { WatchConsumer } from "../context";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
  }
  render() {
    return (
      <NavbarWrapper>
        <div className="logo">
          <img src={logo} className="app-logo" alt="logo" />
          <span className="navbar-brand-name ml-3">Aureola</span>
        </div>
        <ul
          className={this.state.active ? "nav-links nav-active" : "nav-links"}
        >
          <li onClick={this.toggleClass}>
            <NavLink activeClassName="active-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li onClick={this.toggleClass}>
            <NavLink activeClassName="active-link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li onClick={this.toggleClass}>
            <NavLink activeClassName="active-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li onClick={this.toggleClass}>
            <WatchConsumer>
              {(value) => {
                const { cart } = value;
                const length = cart.length;
                return (
                  <NavLink to="/cart">
                    <Badge color="primary" badgeContent={length}>
                      <i className="fas fa-shopping-cart"></i>
                    </Badge>
                  </NavLink>
                );
              }}
            </WatchConsumer>
          </li>
        </ul>
        <div
          className={this.state.active ? "burger toggle" : "burger"}
          onClick={this.toggleClass}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  background: var(--darkPurple);
  color: var(--mainWhite);
  .logo {
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
  }
  ul {
    padding-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 35%;
  }
  ul a {
    color: var(--mainWhite);
    letter-spacing: 2px;
    font-size: 1rem;
  }
  ul li {
    list-style: none;
  }
  .active-link {
    text-decoration: underline;
  }
`;
