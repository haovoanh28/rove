import styled from "styled-components";

export const MessageContainer = styled.div`
  .spinnerContainer {
    position: relative;
  }
`;

export const MessagesContainer = styled.div`
  overflow: auto;
  height: 85%;
  color: black;
`;

export const ControlsContainer = styled.form`
  height: 15%;
  display: flex;
  justify-content: space-between;

  textarea {
    width: 78%;
    height: 100%;
    outline: none;
    border-width: 1px 1px 0 0;
    padding-left: 1rem;
    resize: none;
  }

  button {
    width: 20%;
    height: 100%;
    border-width: 1px 0 0 1px;
  }
`;
