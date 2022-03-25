const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");
const ACTIONS = require("../src/Action");

const io = new Server(server);

const PORT = process.env.PORT || 5000;

const userSocketMap = {};

io.on("connection", (socket) => {
  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
  });
  console.log("New user connected", socket.id);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
