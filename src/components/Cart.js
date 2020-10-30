import React, { Component } from "react";
import Title from "./Title";
import { WatchConsumer } from "../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Title title="My Cart" />
        <WatchConsumer>
          {(value) => {
            const { cart } = value;
            return cart.length === 0 ? (
              <p className="text-center">Your cart is currently empty.</p>
            ) : (
              <div className="container">
                <div className="row">
                  <div className="col-10 col-lg-6 mx-auto">
                    <CartList />
                  </div>
                  <div className="col-10 col-lg-6 mx-auto">
                    <CartTotals value={value} history={this.props.history} />
                  </div>
                </div>
              </div>
            );
          }}
        </WatchConsumer>
      </div>
    );
  }
}
