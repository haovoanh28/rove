import React from "react";

import { ChatContainer, ChatContent } from "./chat.styles";

const Chat = ({ message, who }) => {
  return (
    <ChatContainer who={who}>
      <ChatContent who={who}>{message}</ChatContent>
    </ChatContainer>
  );
};

export default Chat;
