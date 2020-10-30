import React, { Component } from 'react'
import { WatchConsumer } from "../context"
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default class Watch extends Component {
    render() {
        const { id, title, img, imgDesc, price, inCart } = this.props.watch;
        return (
            <WatchWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <WatchConsumer>
                    {(value) => (
                        <NavLink to="/details">
                            <div className="card shadow-sm rounded-0" onClick={()=>{value.getWatchDetails(id)}}>
                                <div className="img-container p5">
                                    <img src={img} alt={imgDesc} className="card-img-top"/>
                                </div>
                                <div className="card-body my-0">
                                    <h4 className="my-0">{title}</h4>
                                    <p className="cart-text my-0">{imgDesc}</p>
                                    <div className="col d-flex justify-content-between p-0 pt-2">
                                        <p className="card-text font-weight-bold">£{price}</p>
                                        {inCart ? (<p className="in-cart">In Cart</p>) : (<p></p>)}
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </WatchConsumer>
            </WatchWrapper>
            
        )
    }
}

// ADD PROPTYPES HERE

const WatchWrapper = styled.div`
    a {
        color: #000000;
    }
    .card {
        transition: all 0.5s linear;
    }
    .card-img-top {
        transition: all 0.5s linear;
    }
    .in-cart {
        border: 0.1rem solid black;
        padding: 0 0.4rem;
    }
    &:hover {
        a {
            text-decoration: none;
        }
        .card {
            border-color: black;
            background: rgba(0,0,0,0.1);
        }
        .img-container {
            position: relative;
            overflow: hidden;
        }
        .card-img-top {
            transform: scale(1.2);
        }

    }
`;