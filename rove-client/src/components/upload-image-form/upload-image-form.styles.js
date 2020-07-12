import styled from "styled-components";

import variables from "../../_variables";

export const StyledInputFileType = styled.input`
  display: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  box-shadow: 0.4rem 0.4rem 1rem 1px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  overflow: hidden;

  p {
    font-size: 3rem;
    text-transform: uppercase;
    color: gray;
  }

  img {
    width: 100%;
    height: 100%;
    display: none;
  }
`;

export const UploadImageFormContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  & button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  & .small_screen {
    display: none;
  }

  @media only screen and (max-width: ${variables.phone}) {
    flex-direction: column;
    & * {
      width: 100%;
    }

    & *:nth-child(3) {
      order: 1;
    }

    & *:nth-child(4) {
      order: 3;
    }

    & *:nth-child(5) {
      text-align: center;
      order: 2;
    }

    & .big_screen {
      display: none;
    }

    & .small_screen {
      display: block;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50%;

  button,
  label {
    margin-top: 0;
  }
`;
