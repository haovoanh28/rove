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
    height: 80%;
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

export const UploadImageTypeContainer = styled.div`
  width: 60%;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.6rem;
  color: ${variables.dark_color};

  #upload_image_type {
    color: ${variables.primary_color};
    text-transform: uppercase;
  }
`;

export const SpinnerContainer = styled.div`
  height:100%;
  background-color: rgba(0,0,0,0.1);
  width: 100%;
  
`