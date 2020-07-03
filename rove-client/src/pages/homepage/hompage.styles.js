import styled from "styled-components";
import img from "./../../assets/images/frank-mckenna-cRLEVt6SZxI-unsplash.jpg";

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
`;

export const Home = styled.div`
  height: 90vh;
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  opacity : 0.7;
`;
