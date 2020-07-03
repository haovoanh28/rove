import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
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

  #close {
    margin: 1rem 1.7rem;
    display: block;
    float: right;
    cursor: pointer;
  }
`;
