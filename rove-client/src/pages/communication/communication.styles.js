import styled from "styled-components";

import variables from "../../_variables";

export const CommunicationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  height: 90vh;
  font-size: 1.6rem;
  background-color: #ffd3b6;
  & > * {
    padding: 2rem 0;
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: ${variables.tab}) {
    height: 100%;
    flex-direction: column;
    padding : 4rem 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 60%;
  height : 100%;
  margin: 0 auto;
  margin-bottom : 3rem;

  img {
    width: 100%;
    height : 100%;
  }
`;

export const UserInfomations = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  background-color: #fcf8f3;
  color: #698474;
  
  @media only screen and (max-width : ${variables.tab}) {
    width: 75%;
    align-self: center;
    margin-bottom : 5rem;
  }

  @media only screen and (max-width : ${variables.phone}) {
    width : 95%;
  }
`;
