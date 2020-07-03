import styled from "styled-components";

export const AvatarAndPhotosContainer = styled.div`
  flex: 1;
  height: 100%;
  max-width: 40rem;
  padding: 1.5rem 1rem;
  border-radius: 0.8rem;
  box-shadow: 0.5rem 0.5rem 0.8rem rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const AvatarContainer = styled.div`
  width: 50%;
  height: 20rem;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0.5rem 0.5rem 0.8rem rgba(0, 0, 0, 0.4);
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
`;

export const PhotosContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 4rem;
  overflow-y: scroll;
  height: 45%;
  div {
    display: inline-block;

    img {
      display: block;
      width: 10rem;
      height: 10rem;
    }
  }
`;
