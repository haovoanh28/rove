import styled, { keyframes } from "styled-components";
import img from "./../../assets/images/frank-mckenna-cRLEVt6SZxI-unsplash.jpg";

import variables from "../../_variables";

export const HomePageContainer = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(255, 211, 182, 0.4),
    rgba(255, 170, 165, 0.4)
  );
  position: relative;

  form {
    position: absolute;
    top: 15%;
    left: 65%;
  }

  @media only screen and (max-width: 1000px) {
    form {
      width: 30%;
    }
  }

  @media only screen and (max-width: 880px) {
    form {
      width: 33%;
    }
  }

  @media only screen and (max-width: ${variables.tab}) {
    display: flex;
    flex-direction: column;

    form {
      display: block;
      position: unset;
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 50%;
    }
  }

  @media only screen and (max-width: ${variables.phone}) {
    form {
      width: 70%;
      min-height: auto;
    }
  }

  @media only screen and (max-width: ${variables.smallPhone}) {
    form {
      width: 90%;
    }
  }
`;

let popUpAnimation = keyframes`
  50% {
    transform: translateY(-2rem)
  }

  100% {
    transform: translateY(0);
  }
`;

export const Home = styled.div`
  height: 90vh;
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  opacity: 0.7;

  .slogan_container {
    margin-left: 1.5rem;
  }

  .slogan {
    font-size: 10rem;
    color: ${variables.light_color};
    padding-top: 1.5rem;
    animation-name: ${popUpAnimation};
    animation-duration: 0.8s;

    &:nth-child(1) {
    }
    &:nth-child(2) {
      animation-delay: 0.8s;
    }
    &:nth-child(3) {
      animation-delay: 1.6s;
    }
  }
`;
