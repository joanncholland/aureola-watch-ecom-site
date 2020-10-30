import React, { Component } from 'react'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <div className="jumbotron p-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                                <div className="p-5">
                                    <h1 className="display-4 text-capitalize">This is your time</h1>
                                    <p className="lead">Celebrate your personality with a radiant timepiece.</p>
                                    <NavLink to='/shop'>
                                        <Button>Shop Now</Button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 p-0 m-0">
                                <img src="img/zodiac-circle.jpg" alt="" className="img-fluid w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PARALLAX SCROLLING EFFECT */}
                <div className="container-fluid middle">
                    <div className="wrapper">
                        <img className="image bg-img" src="logo192.png" alt=""/>
                        <img className="image mg-img" src="logo192.png" alt=""/>
                        <img className="image fg-img" src="logo192.png" alt=""/>
                    </div>
                </div>
            </HomeContainer>
        )
    }
}

const HomeContainer = styled.div`
    .jumbotron {
        background: rgba(0,0,0,0.1);
    }
    .image {
        position: absolute;
        transform-origin: 0 50%;
        width: 420px;
        height: 420px;
    }
    .bg-img {
        height: 840px;
        transform: translateZ(0px) scale(1);
    }
    .middle {
        height: 700px;
    }
`;
