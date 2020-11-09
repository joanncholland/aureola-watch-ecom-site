import React, { Component } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="mt-5">Success!</h1>
        <p>
          The payment has gone through, and your exclusive watch is now on it's
          way to you.
        </p>
        <NavLink to="/shop">
          <Button className="mt-4">Continue Browsing</Button>
        </NavLink>
      </div>
    );
  }
}
