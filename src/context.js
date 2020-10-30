import React, { Component } from "react";
import { watchCollection, watchDetailSample } from "./data.js";

const WatchContext = React.createContext();

class WatchProvider extends Component {
  state = {
    watchCollection: [],
    watchDetail: watchDetailSample,
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  // create fresh data from data.js in state
  componentDidMount() {
    this.setCollection();
  }
  setCollection = () => {
    let tempCollection = [];
    watchCollection.forEach((watch) => {
      const singleWatch = { ...watch };
      tempCollection = [...tempCollection, singleWatch];
    });
    this.setState(() => {
      return {
        watchCollection: tempCollection,
      };
    });
  };

  getWatchById = (id) => {
    return this.state.watchCollection.find((watch) => watch.id === id);
  };

  getWatchDetails = (id) => {
    const watch = this.getWatchById(id);
    this.setState(() => {
      return {
        watchDetail: watch,
      };
    });
  };

  addToCart = (id) => {
    let tempCollection = [...this.state.watchCollection];
    const index = tempCollection.indexOf(this.getWatchById(id));
    const watch = tempCollection[index];
    watch.inCart = true;
    watch.count = 1;
    watch.total = watch.price;
    this.setState(
      () => {
        return {
          watchCollection: tempCollection,
          cart: [...this.state.cart, watch],
        };
      },
      () => {
        this.calculateCartTotals();
      }
    );
  };

  getFreshTempCollectionData = (id) => {
    let tempCart = [...this.state.cart];
    const selectedWatch = this.getWatchById(id);
    const index = tempCart.indexOf(selectedWatch);
    const watch = tempCart[index];

    return { watch, tempCart };
  };

  increment = (id) => {
    let { watch, tempCart } = this.getFreshTempCollectionData(id);
    watch.count += 1;
    watch.total = watch.price * watch.count;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.calculateCartTotals();
      }
    );
  };
  decrement = (id) => {
    let { watch, tempCart } = this.getFreshTempCollectionData(id);

    watch.count -= 1;
    if (watch.count === 0) {
      this.removeFromCart(id);
    } else {
      watch.total = watch.price * watch.count;

      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.calculateCartTotals();
        }
      );
    }
  };
  removeFromCart = (id) => {
    let tempProducts = [...this.state.watchCollection];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getWatchById(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          watchCollection: [...tempProducts],
        };
      },
      () => {
        this.calculateCartTotals();
      }
    );
  };

  calculateCartTotals = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState({
      cartSubtotal: subtotal,
      cartTax: tax,
      cartTotal: total,
    });
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setCollection();
        this.calculateCartTotals();
      }
    );
  };

  render() {
    return (
      <WatchContext.Provider
        value={{
          ...this.state,
          getWatchDetails: this.getWatchDetails,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </WatchContext.Provider>
    );
  }
}

const WatchConsumer = WatchContext.Consumer;

export { WatchProvider, WatchConsumer };
