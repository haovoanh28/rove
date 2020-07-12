import styled from "styled-components";

export const StyledUserMenu = styled.div`
  width: 150%;
  height: 150%;

  div {
    padding-top: 0.8rem;
    position: absolute;
    left: 50%;
    top: 100%;
    background-color: #ff4d94;
    z-index: 10;
    transform: translateX(-50%);
    clip-path: polygon(50% 0, 53% 5%, 100% 5%, 100% 100%, 0 100%, 0 5%, 46% 5%);
    border-radius: 0.8rem;
    display: none;
  }

  a {
    display: block;
    white-space: nowrap;
    padding: 1rem 2rem;
  }

  &:hover div {
    display: block;
  }
`;
