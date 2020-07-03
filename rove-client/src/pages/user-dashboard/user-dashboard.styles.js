import styled, { css } from "styled-components";

export const TitleList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  border-radius: 0.5rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
  cursor: pointer;

  &:not(:last-child) {
    border-right : 1px solid #fcf8f3;
  }

  ${(props) =>
    props.isVisible
      ? css`
          background-color: #f36860;
        `
      : css`
          background-color: #ffaaa5;
        `}

  &:hover {
    background-color: #f36860;
  }
`;

export const UserDashboardTitle = styled.div`
  color: inherit;
  height: 10%;
`;

export const StyledUserDashboard = styled.div`
  width: 70%;
  align-self: stretch;
  color : white;
  background-color : #fcf8f3;
  padding: 0;
  border-radius: 0.5rem;
  overflow: hidden;
`;
