import styled, { css } from "styled-components";

const buttonStyles = css`
  padding: 1.4rem;
  margin-top: 1.5rem;
  display: inline-block;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  min-width: 40%;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.5rem 0.7rem rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-0.1rem);
  }

  &:active {
    transform: translateY(0.2rem);
  }

  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled.button`
  ${buttonStyles}
  background-color : #ffaaa5;
  color: #fcf8f3;

  &:hover {
    background-color: #f36860;
  }
`;

export const WhiteButton = styled.button`
  ${buttonStyles}
  background-color : #fcf8f3;
  color: #698474;

  &:hover {
    background-color: #ece2d7;
  }
`;
