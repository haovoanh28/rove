import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-bottom: 1px solid #698474;
  background-color: #fcf8f3;

  &:focus {
    outline: none;
  }

  &:placeholder-shown ~ label {
    display: inline-block;
    opacity: 0;
    visibility: hidden;
    transform: translateY(0);
  }
`;
