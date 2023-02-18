const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

const rooms = {};

io.on("connection", (socket) => {
  socket.on("create_room", async (room) => {
    socket.host = true;
    socket.roomID = room;
    console.log("created game, host:", socket.host);
    rooms[room] = {};
  });

  socket.on("join_room", async (data) => {
    console.log(socket.id);
    if (rooms[data.room]) {
      socket.roomID = data.room;
      rooms[data.room][socket.id] = { name: data.name, score: 0 };
      await socket.join(data.room);
      io.to(data.room).emit("players", Object.values(rooms[data.room]));
    } else {
      socket.emit("error_message", "Room Does not Exist");
    }
  });

  socket.on("send_message", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    if (socket.roomID && rooms[socket.roomID] && socket.id in rooms[socket.roomID]) {
      delete rooms[socket.roomID][socket.id];
      io.to(socket.roomID).emit("players", Object.values(rooms[socket.roomID]));
      if (
        Object.keys(rooms[socket.roomID]).length === 0 ||
        socket.host === true
      ) {
        console.log("deleting room");
        delete rooms[socket.roomID];
        console.log(rooms);
        io.to(socket.roomID).emit("error_message", "Host had abandoned game");
      }
    }
    socket.host = false;
    socket.roomID = null;
  });
});

server.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
