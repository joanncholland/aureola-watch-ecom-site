import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Default from "./components/Default.js";
import Details from "./components/Details.js";
import Footer from "./components/Footer";
import Success from "./components/Success";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/success" component={Success}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}
