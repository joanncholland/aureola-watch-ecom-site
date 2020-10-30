import React, { Component } from 'react'
import { WatchConsumer } from '../context'
import CartItem from './CartItem'
export default class CartList extends Component {
    render() {
        return (
            <WatchConsumer>
                {(value) => {
                    const { cart } = value;
                    return (
                        cart.map(item => (<CartItem key={item.id} item={item} value={value} />))
                    )
                }}
            </WatchConsumer>
        )
    }
}


