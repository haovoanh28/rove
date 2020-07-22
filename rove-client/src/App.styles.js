/*
Primary color : #ffaaa5
Secondary color : #ffd3b6

Light color : #fcf8f3
Dark color : #698474

*/

import styled from "styled-components";
import variables from './_variables';

export const SuccessMessage = styled.div`
  display: none;
  width: 60%;
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translate(-50%);
  color: white;
  background-color: #34eb56;
  font-size: 2rem;
  text-align: center;
  z-index: 10;
  border-radius: 1rem;
  padding: 1.5rem 0.5rem;

  @media only screen and (max-width: ${variables.tab}) {
      width: 80%;
  }

  @media only screen and (max-width: ${variables.phone}) {
      width: 95%;
  }
`;
