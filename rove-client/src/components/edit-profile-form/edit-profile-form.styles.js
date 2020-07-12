import styled from "styled-components";

import variables from "../../_variables";

export const StyledEditProfileForm = styled.form`
  width: 60%;
  background-color: #fcf8f3;
  align-self: stretch;
  padding: 3rem;
  border-radius: 0.8rem;
  box-shadow: 0.5rem 0.5rem 0.8rem rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: ${variables.largeTab}) {
    align-self: center;
    width: 75%;
  }

  @media only screen and (max-width: ${variables.tab}) {
    width: 90%;
  }

  @media only screen and (max-width : ${variables.phone}) {
    flex-direction : column;
    padding: 1.5rem 0;
  }
`;
