import socketTypes from "./socket.types";

export const createSocket = (id) => ({
  type: socketTypes.CREATE_SOCKET,
  payload: id,
});

export const onReceiveMessage = () => ({
  type: socketTypes.ON_RECEIVE_MESSAGE,
});

export const closeSocket = () => ({
  type: socketTypes.CLOSE_SOCKET,
});
