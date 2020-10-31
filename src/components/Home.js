import React, { Component } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeParallax from "./HomeParallax";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeParallax />
        <div style={{ height: "1500px" }}></div>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  height: 100%;
  div {
    position: relative;
    height: 300px;
  }
`;
