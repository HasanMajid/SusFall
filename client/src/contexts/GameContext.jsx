import React, { createContext, useEffect, useState, useContext } from "react";
import { SocketContext } from "./SocketContext";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const socket = useContext(SocketContext);
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [roomExist, setRoomExist] = useState(true);
  const [room, setRoom] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [image, setImage] = useState(null);
  const [spy, setSpy] = useState("");

  const joinRoom = () => {
    console.log(room);
    socket.emit("join_room", { name, room });
  };

  useEffect(() => {
    socket.on("players", (data) => {
      console.log("players updated", data, room);
      setPlayers(data);
    });

    socket.on("user_disconnected", (data) => {
      console.log("player disconnected", data);
      setPlayers((list) => {
        const newList = list;
        const index = newList.indexOf(2);
        newList.pop(index);
        return [...newList];
      });
    });

    socket.on("error_message", (data) => {
      console.log(data, room);
      setRoomExist(false);
    });

    socket.on("start_game", (data) => {
      if (data.spy === true) {
        setSpy(true);
      } else {
        setImage(data.image);
      }
      console.log('starting game!!')
      setGameStarted(true);
    });
  }, [socket]);

  useEffect(() => {
    if (name !== "" && room !== "") {
      joinRoom();
    }
  }, [name]);

  return (
    <GameContext.Provider
      value={{
        players,
        roomExist,
        setName,
        name,
        setRoom,
        gameStarted,
        image,
        spy,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
