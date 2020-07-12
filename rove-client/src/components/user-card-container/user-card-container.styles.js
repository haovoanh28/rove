import styled from "styled-components";

import variables from '../../_variables';

export const StyledUserCardContainer = styled.div`
  padding: 2rem 0;
  border-radius: 1rem;
  box-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 0, 0, 0.4);
  flex: 0 0 20rem;
  margin : 3rem;
  align-content : space-between;
  background-color : #fcf8f3;

  @media only screen and (max-width : ${variables.tab}) {
    flex : 0 0 18rem;
    margin : 2rem 1.2rem;
  }
`;
