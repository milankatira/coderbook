import { io } from "socket.io-client";

export const initSocket = async () => {
  const optios = {
    "force new connection": true,
    reconnection: true,
    timeout: 1000,
    transports: ["websocket"],
  };
  return io("http://localhost:5000", optios);
};
