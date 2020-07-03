import styled from "styled-components";

export const StyledUserCard = styled.div`
  width: 85%;
  margin: 0 auto;
  font-size: 1.5rem;
  text-align: center;

  div {
    display: flex;
  }

  p {
    margin-right: 0.8rem;
  }

  span {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  width : 100%;
  height : 17rem;

  img {
    display: block;
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
    object-fit : cover;
  }
`;

export const NameAndGender = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height : 3.5rem;
`;
