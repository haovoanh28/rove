import io from "socket.io-client";
import socketTypes from "./socket.types";

const INITIAL_STATE = {
  socket: null,
  sender: "",
  received_message: "",
};

const socketReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case socketTypes.CREATE_SOCKET:
      return {
        ...currentState,
        socket: io("http://localhost:8000", {
          query: {
            id: action.payload,
          },
        }),
      };
    case socketTypes.ON_RECEIVE_MESSAGE:
      currentState.socket.on("receive-message", ({ sender, message }) => {
        console.log(`receive message ${message} from ${sender}`);
        currentState.sender = sender;
        currentState.received_message = message;
      });
      return currentState;
    case socketTypes.CLOSE_SOCKET:
      currentState.socket.close();
      return currentState;
    default:
      return currentState;
  }
};

export default socketReducer;
