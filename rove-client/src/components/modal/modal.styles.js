import styled from "styled-components";

import variables from '../../_variables';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
`;

export const StyledModal = styled.div`
  width: 80%;
  height: 90vh;
  border-radius: 0.8rem;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0.5rem 0.5rem 0.3rem rgba(0, 0, 0, 0.4);
  font-size: 1.6rem;
  overflow : hidden;

  .modal_header {
    height : 7%;
    background-color: #f36860;
  }

  #close {
    margin: 1rem 1.7rem;
    position: absolute;
    top: -2px;
    right : 0;
    display: block;
    float: right;
    cursor: pointer;
    color : white;
  }

  @media only screen and (max-width : ${variables.phone}) {
    width: 95%;
  }

  @media only screen and (max-width : ${variables.tab}) {
    #close {
      font-size : 2.2rem;
    }
  }
`;
