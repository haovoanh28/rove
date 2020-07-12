import styled from "styled-components";

import variables from "../../_variables";

export const IntroAndInterestsContainer = styled.div`
  margin-top: 3.5rem;
  margin-right: 4rem;
  textarea {
    margin-top: 0.6rem;
    line-height: 1.8rem;
    text-align: justify;
    border-radius: 1rem;
    padding: 1rem;
    resize: none;
    width: 125%;
  }

  @media only screen and (max-width: ${variables.phone}) {
    order: 1;
    margin-right: 0;
    width: 100%;

    textarea {
        width: 100%;
    }
  }
`;
