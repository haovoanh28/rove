import styled from "styled-components";

export const StyledInputFileType = styled.input`
  display: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  box-shadow: .4rem .4rem .4rem rgba(0,0,0, 0.4);
  border-radius: .5rem;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
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

  button:disabled {
    background-color : gray;
    cursor: not-allowed;
  }
`;
