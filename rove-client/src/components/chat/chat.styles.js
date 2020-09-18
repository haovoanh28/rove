import styled, { css } from "styled-components";

import variables from "../../_variables";

const sentMessage = css`
  background-color: ${variables.primary_color};
  margin-right: 2rem;
`;

const receivedMessage = css`
  background-color: ${variables.dark_color};
  margin-left: 2rem;
`;

export const ChatContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  ${(props) =>
    props.who === "me"
      ? "justify-content: flex-end;"
      : "justify-content: flex-start;"};
`;

export const ChatContent = styled.span`
  display: inline-block;
  word-break: break-all;
  border-radius: 2.5rem;
  padding: 0.8rem;
  max-width: 45%;
  ${(props) => (props.who === "me" ? sentMessage : receivedMessage)};
`;
