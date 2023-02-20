import React, { useState, useEffect, useRef, useContext } from "react";
import { Center, Flex, Heading, Text, Box } from "@chakra-ui/react";

import { GameContext } from "../contexts/GameContext";

import NameInput from "../components/game/NameInput";
import { useParams } from "react-router-dom";
import ReadyButton from "../components/game/ReadyButton";
import StartButton from "../components/game/StartButton";
import { SocketContext } from "../contexts/SocketContext";

function Game() {
  const { players, roomExist, setName, name, setRoom } =
    useContext(GameContext);
  const socket = useContext(SocketContext);
  const [lobby, setLobby] = useState(<div></div>);

  const { room } = useParams();
  useEffect(() => {
    setRoom(room);
  }, []);

  useEffect(() => {
    // console.log("returning players in game", players);

    setLobby(
      <Flex flexDir={"column"} m={"auto"}>
        {" "}
        {players.map((item, index) => {
          return (
            <Flex key={item.id} m={3} fontSize={20} justifyContent={"flex-end"}>
              <Box mr={3}>{item.name}</Box>
              <Box>
                <ReadyButton room={room} isReady={item.ready} id={item.id} />{" "}
              </Box>
            </Flex>
          );
        })}
      </Flex>
    );
  }, [players]);

  if (!roomExist) {
    return <Heading>Room Does not Exist</Heading>;
  }

  if (name === "") {
    return <NameInput setName={setName} />;
  }

  return (
    <Center>
      <Flex flexDir="column">
        <Heading>Game Screen</Heading>
        <br />
        <Text fontSize={30}>room {room}</Text>
        {lobby}
        <br />
        {players[0]?.id === socket.id && <StartButton />}
      </Flex>
    </Center>
  );
}

export default Game;
