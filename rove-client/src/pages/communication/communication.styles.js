import styled from "styled-components";

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
`;

export const ImageContainer = styled.div`
  max-width: 150px;
  height: 200px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

export const UserInfomations = styled.div`
  align-self: stretch;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  width: 25%;
  background-color: #fcf8f3;
  color: #698474;
`;
