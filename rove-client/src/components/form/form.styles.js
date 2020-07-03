import styled from "styled-components";

export const FormContainer = styled.form`
  width: 30%;
  min-height: 10rem;
  background-color: #fcf8f3;
  border-radius: 0.5rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  font-size: 1.6rem;
  text-align: center;

  & > * {
    margin-bottom: 4.5rem;
  }

  .text {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2rem;
    color: #ffaaa5;
    font-weight: 200;
    padding: 4rem 0;
  }

  .form-btn-group {
    max-width: 80%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-around;
  }

  .errText {
    text-align: center;
    margin: 0 auto;
    width: 70%;
    padding: 2rem;
    background-color: #ff6171;
    color: #fcf8f3;
    border-radius: 0.5rem;
    box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
  }
`;
