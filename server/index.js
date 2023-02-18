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
    if (socket.host) {
      console.log("deleting roomID:", socket.roomID);
      io.socketsLeave(socket.roomID);
      delete rooms[socket.roomID];
    }
    socket.host = true;
    socket.roomID = room;
    console.log("created game, host:", socket.host);
    rooms[room] = {};
  });

  socket.on("join_room", async (data) => {
    console.log(socket.id);
    if (rooms[data.room]) {
      rooms[data.room][socket.id] = { name: data.name, score: 0 };
      await socket.join(data.room);
      io.to(data.room).emit("players", Object.values(rooms[data.room]));
    } else {
      socket.emit("error_message", "Room Does not Exist");
    }
    console.log("Joined game, host:", socket.host);
  });

  socket.on("send_message", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    for (const room in rooms) {
      if (socket.id in rooms[room]) {
        delete rooms[room][socket.id];
        io.to(room).emit("players", Object.values(rooms[room]));

        if (Object.keys(rooms[room].length === 0)) {
          delete rooms[room];
        }
        break;
      }
    }
  });
});

server.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
