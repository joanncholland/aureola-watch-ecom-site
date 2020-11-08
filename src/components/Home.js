import React, { Component } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid" src="img/watch.png" alt="watch" />
            </div>
            <div className="col-6 text-white">
              <h1 className="text-white">Shop the Collection</h1>
              <p>Get your zodiac watch today.</p>
              <NavLink to="/shop">
                <button>Browse</button>
              </NavLink>
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  height: calc(100vh - 60px);
  background: var(--darkPurple);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    border: 1px solid var(--darkPurple);
    padding: 0.5rem 0.8rem;
    transition: 1s;
    &:hover {
      background: var(--darkPurple);
      color: var(--mainWhite);
      border: 1px solid var(--mainWhite);
    }
  }
`;
