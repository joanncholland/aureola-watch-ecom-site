import React, { Component } from "react";
import { WatchConsumer, WatchProvider } from "../context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <div className="container-fluid pb-5">
        <WatchConsumer>
          {(value) => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            return modalOpen ? (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: £{price}</h5>
                      <NavLink to="/shop">
                        <Button onClick={() => closeModal()}>
                          Continue Shopping
                        </Button>
                      </NavLink>
                      <NavLink to="/cart">
                        <Button cart onClick={() => closeModal()}>
                          Go to Cart
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            ) : null;
          }}
        </WatchConsumer>
      </div>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
