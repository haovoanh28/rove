import styled from "styled-components";

import variables from "../../_variables";

export const AvatarAndPhotosContainer = styled.div`
  flex: 1;
  height: 100%;
  max-width: 45rem;
  padding: 1.5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 0.5rem 0.5rem 0.8rem rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  button {
    width: 40%;
    margin: 1rem auto;
    margin-top: 3rem;
    font-size: 3.5rem;
    padding: 0.5rem 0;
  }

  @media only screen and (max-width: ${variables.largeTab}) {
    margin-bottom: 3rem;
    min-width: 75%;
  }

  @media only screen and (max-width: ${variables.tab}) {
    min-width: 90%;
  }

  @media only screen and (max-width: ${variables.phone}) {
    padding: 1.5rem 0;
  }
`;

export const AvatarContainer = styled.div`
  height: 20rem;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  img {
    margin: 0 auto;
    display: block;
    height: 100%;
    box-shadow: 0.2rem 0.2rem 0.8rem 0.5rem rgba(0, 0, 0, 0.4);
    border-radius: 0.8rem;
    object-fit: cover;
  }

  div {
    background-color: grey;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.7;
    border-radius: 0.8rem;

    p {
      font-size: 1.6rem;
    }
  }

  &:hover > div {
    display: flex;
  }

  @media only screen and (max-width: ${variables.tab}) {
    height: 30rem;
    img {
      object-fit: fill;
    }
  }
`;

export const PhotosContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 4rem;
  overflow-y: scroll;
  height: 45%;
  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 50rem;
  }

  & div div {
    display: inline-block;
    align-self: center;
    flex: 0 0 15rem;
    height: 15rem;
    margin-bottom: 1.5rem;
    margin-right: 1rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
      border: 0.5px solid ${variables.dark_color};
      box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
    }
  }

  @media only screen and (max-width: ${variables.phone}) {
    width: 100%;
    border: none;
  }
`;
