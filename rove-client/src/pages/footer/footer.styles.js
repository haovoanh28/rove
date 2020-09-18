import styled from "styled-components";

import variables from "../../_variables";

export const FooterContainer = styled.footer`
  height: 16rem;
  background-color: ${variables.secondary_color};
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${variables.smallPhone}) {
    flex-direction: column;
    height: 37rem;
  }
`;

export const ContactMe = styled.div`
  margin-left: 2rem;
  ul {
    margin-top: 1rem;
    margin-left: 2rem;
    list-style: none;
    li {
    }
  }
`;

export const FindMeOn = styled.div`
  .footer_icons {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    & * {
      width: 40px;
      height: 40px;
    }
  }

  @media only screen and (max-width: ${variables.smallPhone}) {
    margin-left: 2rem;
    margin-top: 2rem;
    .footer_icons {
      justify-content: space-evenly;
    }
  }
`;

export const Technologies = styled.div`
  margin-right: 2rem;

  ul {
    margin-top: 1rem;
    list-style: none;
    margin-left: 2rem;
  }

  @media only screen and (max-width: ${variables.smallPhone}) {
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;
