import React, { useState, useEffect, useRef, useContext } from "react";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { SocketContext } from "../contexts/SocketContext";

import NameInput from "../components/game/NameInput";

function Game() {
  const socket = useContext(SocketContext);
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const { room } = useParams();

  const joinRoom = () => {
    socket.emit("join_room", {name, room});
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
      // setPlayers((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    if (name !== "") {
      joinRoom();
    }
  }, [name]);

  return (
    <Center>
      {name === "" ? (
        <NameInput setName={setName} />
      ) : (
        <Flex flexDir="column">
          <Heading>Game Screen</Heading>
          <br />
          <Text fontSize={30}>room {room}</Text>
          {players.map((item, index) => {
            return <Text key={index}>{item.name}</Text>;
          })}
        </Flex>
      )}
    </Center>
  );
}

export default Game;
