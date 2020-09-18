import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import variable from "../../_variables";

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

      @media only screen and (max-width: ${variable.tab}) {
        margin-right : 0;

        #brand_logo {
          display: none;
        }
      }

      span {
        cursor: pointer;
      }

      a,
      span {
        transition: transform 0.2s;
        &:link,
        &:visited {
          text-decoration: none;
          color: inherit;
        }

        &:hover,
        &:active {
          transform: translateX(0.5rem);
        }
      }
    }

    @media only screen and (max-width: ${variable.tab}) {
      & {
        min-height: 8vh;
      }
    }
  }

  .sub-logo {
    display: none;

    @media only screen and (max-width: ${variable.tab}) {
      display: block;
      
      #image0 {
        height: 200px !important;
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

      @media only screen and (max-width: ${variable.tab}) {
        text-transform: none;
        margin-left: 0;
        display : none;
      }
    }
    @media only screen and (max-width: ${variable.tab}) {
      align-self: center !important;
    }
  }

  @media only screen and (max-width: ${variable.tab}) {
    & {
      display: none !important;
      flex-direction: column;
      position: absolute;
      top: 10vh;
      z-index: 2;
      width: 100%;
      height: 25rem;
      justify-content: space-around;
    }
  }
`;

export const User = styled.ul`
  li {
    .avatar {
      width: 5rem;
      height: 5rem;
      background-image: url(${(props) => props.avatar});
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      border : 1px solid ${variable.light_color};
      position: relative;
      
      @media only screen and (max-width : ${variable.tab}) {
        margin-right: 1em;
        font-size: 1.5rem;
      }

      @media only screen and (max-width : ${variable.phone}) {
        margin-right: 4rem;
      }
    }
  }

  @media only screen and (max-width: ${variable.phone}) {
    & #user-first-name {
      display: none;
    }
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  width: 3rem;
  height: 10vh;
  margin-left: 2.5rem;
  display: none;

  @media only screen and (max-width: ${variable.tab}) {
    & {
      display: block;
    }
  }

  @media only screen and (max-width : ${variable.smallPhone}) {
    & {
      width: 4.5rem;
    }
  }
`;
