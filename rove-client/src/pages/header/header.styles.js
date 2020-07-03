import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #ffaaa5;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    background-color: #ffaaa5;
    color: #fcf8f3;
    align-items: center;
    li {
      display: flex;
      align-self: stretch;
      align-items: center;
      padding: 0 0.5rem;
      font-size: 1.6rem;
      margin-right: 2rem;

      span {
        cursor : pointer;
      }

      a, span {
        transition: transform 0.2s;
        &:link,
        &:visited {
          text-decoration: none;
          color: inherit;
        }

        &:hover,
        &:active {
          transform: translateX(.5rem);
        }
      }
    }
  }
`;

export const Brand = styled.ul`
  li {
    &:first-child {
      margin-left: 3rem;
      font-size: 3rem;
      text-transform: uppercase;
    }
  }
`;

export const User = styled.ul`
  li {
    .avatar {
      width: 50px;
      height: 50px;
      background-image : url(${props => props.avatar}); 
      background-size : cover;
      background-position : center;
      border-radius : 50%;
      position : relative;
    }
  }
`;
