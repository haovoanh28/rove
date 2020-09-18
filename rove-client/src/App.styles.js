/*
Primary color : #ffaaa5
Secondary color : #ffd3b6

Light color : #fcf8f3
Dark color : #698474

*/

import styled, {keyframes} from "styled-components";
import variables from './_variables';

const slideDownAnimation = keyframes`
  0% {
    top : 0rem;
  }

  80% {
    top : 4rem;
  }

  100% {
    top : 4rem;
  }
`;

export const SuccessMessage = styled.div`
  display: none;
  width: 60%;
  position: fixed;
  top: -2rem;
  left: 50%;
  transform: translate(-50%);
  color: white;
  background-color: #34eb56;
  font-size: 2rem;
  text-align: center;
  z-index: 10;
  border-radius: 1rem;
  box-shadow : .5rem .5rem .5rem rgba(0,0,0, 0.4);
  padding: 1.5rem 0.5rem;
  animation-name : ${slideDownAnimation};
  animation-duration: 3s;

  @media only screen and (max-width: ${variables.tab}) {
      width: 80%;
  }

  @media only screen and (max-width: ${variables.phone}) {
      width: 95%;
  }
`;
