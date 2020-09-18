import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";

import {
  selectSelectedUserId,
  selectCurrentUserId,
} from "../../redux/user/user.selectors";

import {
  ControlsContainer,
  MessagesContainer,
  MessageContainer,
} from "./message.styles";

import Chat from "../chat/chat.component";

const Message = ({
  selectedUserId,
  currentUserId,
  socket,
  received_message,
  sender,
  getMessagesStart,
  ...otherProps
}) => {
  // Danh sach cac phan tu chat
  const [chatList, setChatList] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  const chatListRef = useRef([]);

  // Danh sach cac tin nhan giua nguoi gui va nguoi nhan
  const [messageList, setMessageList] = useState([]);

  //const [socket, setSocket] = useState(null);
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = (message) => {
    socket.emit("send-message", {
      recipient: selectedUserId,
      message,
    });
    setMessageContent("");
    console.log("sent message");
  };

  const addChat = useCallback(
    (id, message) => {
      if (message.length <= 0) return;
      const role = id === currentUserId ? "me" : "other";
      setChatList(
        // chatList.concat(
        //   <Chat message={message} who={role} key={new Date().getTime()} />
        (prevArray) => [
          ...prevArray,
          <Chat message={message} who={role} key={new Date().getTime()} />,
        ]
      );
    },
    [currentUserId]
  );

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log("fetching messages");
      const data = {
        sender: currentUserId,
        receiver: selectedUserId,
      };
      console.table(data);

      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/api/v1/messages",
        headers: {
          "Content-Type": "application/json",
        },
        params: data,
      });

      setMessageList(response.data.data);
    };
    fetchMessages();
  }, [currentUserId, selectedUserId]);

  useEffect(() => {
    if (messageList.length <= 0) return;

    console.log(messageList);

    messageList.forEach((messageObj) => {
      const { sender, receiver, content } = messageObj;

      addChat(sender, content);
    });

    return () => setMessageList([]);
  }, [messageList, addChat, currentUserId]);

  useEffect(() => {
    if (socket == null) return;
    socket.on("receive-message", ({ sender, message }) => {
      addChat(sender, message);
    });
  }, [socket, addChat]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addChat(currentUserId, messageContent);
      sendMessage(messageContent);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addChat(currentUserId, messageContent);
    sendMessage(messageContent);
  };

  return (
    <MessageContainer>
      <MessagesContainer>
        <p>Your current id {currentUserId}</p>
        <p>You are chatting with {selectedUserId}</p>
        {chatList}
        <div ref={messageEndRef} style={{ height: "5%" }} />
      </MessagesContainer>
      <ControlsContainer onSubmit={handleSubmit}>
        <textarea
          type="text"
          onChange={(e) => setMessageContent(e.target.value)}
          onKeyDown={handleKeyDown}
          value={messageContent}
        />
        <button type="submit">Send</button>
      </ControlsContainer>
    </MessageContainer>
  );
};

const mapStateToProps = (state) => ({
  selectedUserId: selectSelectedUserId(state),
  currentUserId: selectCurrentUserId(state),
  socket: state.socket.socket,
  sender: state.socket.sender,
  received_message: state.socket.message,
});

export default connect(mapStateToProps)(Message);
