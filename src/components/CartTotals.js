import React from "react";
import styled from "styled-components";
import PayPalButton from "./PayPal";

export default function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <SubtotalContainer>
      <h4>Subtotal: £{cartSubtotal}</h4>
      <p>Tax: £{cartTax}</p>
      <h3>Total: £{cartTotal}</h3>
      <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
    </SubtotalContainer>
  );
}

const SubtotalContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 0 0 0.2rem 1rem;
  margin-bottom: 1rem;
`;

// ADD PAYPAL BUTTON
