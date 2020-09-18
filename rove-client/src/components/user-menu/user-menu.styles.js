import styled from "styled-components";

export const StyledUserMenu = styled.div`
  width: 135%;
  height: 150%;

  div {
    padding-top: 0.8rem;
    position: absolute;
    left: -80%;
    top: 100%;
    background-color: #ff4d94;
    z-index: 10;
    transform: translateX(-50%);
    clip-path: polygon(83% 0, 90% 7%, 100% 7%, 100% 100%, 0 100%, 0 7%, 75% 7%);
    border-radius: 0.8rem;
    display: none;
  }

  a {
    display: block;
    white-space: nowrap;
    padding: 1rem 2rem;

    span {
      display: inline-block;
      width:65%;
    }

    svg {
      width: 2rem;
      height: 2rem;
      transform: translateY(2px);
      margin-left: 3.5rem;
    }
  }

  &:hover div {
    display: block;
  }
`;
