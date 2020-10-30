import React from 'react'
import styled from 'styled-components'

export default function CartItem({ item, value }) {
    const { title, img, imgDesc, price, count, id } = item;
    const { increment, decrement, removeFromCart } = value;
    return (
        <>
        <CartItemContainer className="container">
            <div className="row">
                <div className="col-4">
                    <img src={img} alt={imgDesc} className="img-fluid" />
                </div>
                <div>
                    <h4 className="my-0">{title}</h4>
                    <p className="my-0">{imgDesc}</p>
                    <div className="my-2">
                        <QuantityControlContainer className="col d-flex justify-content-between align-items-center">
                            <span className="btn quantity-icon" onClick={() => decrement(id)}>-</span>
                            <span className="btn mx-0">{count}</span>
                            <span className="btn quantity-icon" onClick={() => increment(id)}>+</span>
                        </QuantityControlContainer>
                    </div>
                </div>
                <div className="col-2 mt-4 ml-5 d-flex flex-column justify-content-between align-items-center">
                    <p className=""><strong>£{price}</strong></p>
                    <div className="cart-icon" onClick={() => removeFromCart(id)}><i className="fas fa-trash mb-4"></i></div>
                </div>
            </div>
            <hr/>
        </CartItemContainer>
        </>
    )
}

const QuantityControlContainer = styled.div`
    border: 1px solid black;
    span {
        font-size: 1.2rem;
    }
`;

const CartItemContainer = styled.div`
    .cart-icon:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
