import React, { Component } from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import { Button } from "./Button";

export default class HomeParallax extends Component {
  render() {
    return (
      <>
        <HeaderContainer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-6 mx-auto d-flex flex-column justify-content-center ml-0 pl-0">
                <div className="header-desc pl-5 col-8">
                  <h1>Your Time is Here</h1>
                  <p>
                    Get your personal Zodiac sign watch today, and never lose
                    track of time. It's precious.
                  </p>
                  <Button cart>Shop Now</Button>
                </div>
              </div>
              <div className="col-12 col-lg-6 mx-auto">
                <Parallax
                  className="your-class"
                  y={[-20, 20]}
                  tagOuter="figure"
                >
                  <img src="img/zodiac-wheel.svg" alt="" />
                </Parallax>
              </div>
            </div>
          </div>
        </HeaderContainer>
        <div className="container-fluid">
          <h1 className="text-center">The Collection</h1>
          <div className="row">
            <div className="col-10 col-lg-6 mx-auto">
              <Parallax className="your-class" y={[10, -50]} tagOuter="figure">
                <img src="img/watch.png" alt="" className="img-fluid" />
              </Parallax>
            </div>
            <div className="col-10 col-lg-6 mx-auto bg-purple">
              <p className="pl-3 pt-3">
                The only home we've ever known billions upon billions concept of
                the number one something incredible is waiting to be known realm
                of the galaxies radio telescope. Courage of our questions with
                pretty stories for which there's little good evidence permanence
                of the stars shores of the cosmic ocean star stuff harvesting
                star light descended from astronomers? Kindling the energy
                hidden in matter dream of the mind's eye the sky calls to us how
                far away two ghostly white figures in coveralls and helmets are
                softly dancing two ghostly white figures in coveralls and
                helmets are softly dancing and billions upon billions upon
                billions upon billions upon billions upon billions upon
                billions.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const HeaderContainer = styled.div`
  background-image: url("img/aureola-bg.jpg");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  background-color: var(--darkPurple);
  .header-desc {
    color: var(--mainWhite);
    background: linear-gradient(to right, var(--darkPurple), transparent);
    h1 {
      color: var(----mainWhite);
    }
  }

  .your-class {
    ${"" /* border: 1px solid red; */}
    img {
      width: 200px;
      float: right;
      margin-right: 10%;
    }
  }
`;
