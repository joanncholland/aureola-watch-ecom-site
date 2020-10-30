import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 0.8rem;
  background: ${props => props.cart ? "var(--gold)" : "var(--darkPurple)"};
  border: 0.05rem solid var(--lightPurple);
  border-color: ${props => props.cart ? "var(--gold)" : "var(--lightPurple)"};
  color: ${props => props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: transparent;
    color: ${props => props.cart ? "var(--gold)" : "var(--darkPurple)"};
  }
  &:focus {
    outline: none;
  }
`;
