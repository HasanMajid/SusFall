import React, { useState, useEffect, useRef, useContext } from "react";
import { Center, Flex, Heading, Text, Box, Image } from "@chakra-ui/react";

import { GameContext } from "../contexts/GameContext";

import NameInput from "../components/game/NameInput";
import { useParams } from "react-router-dom";
import ReadyButton from "../components/game/ReadyButton";
import StartButton from "../components/game/StartButton";
import { SocketContext } from "../contexts/SocketContext";
import Grid from "../components/grid/Grid";
import locations from "../constants/locations";
import Chat from "../components/game/chat/Chat";

function Game() {
  const {
    players,
    roomExist,
    setName,
    name,
    setRoom,
    gameStarted,
    image,
    spy,
  } = useContext(GameContext);
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
        {players.map((item) => {
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

  if (gameStarted) {
    console.log("showing game screen");
    console.log("image is", image);
    return (
      <Center flexDir={"column"}>
        {spy ? (
          <Heading m={5} color={"red.300"}>
            You are the spy
          </Heading>
        ) : (
          <Flex flexDir={"column"} m={5}>
            <Image
              src={locations[image]}
              w={500}
              shadow={"dark-lg"}
              borderWidth={2}
              borderRadius={10}
            />
            <Heading m={2}>{image}</Heading>
          </Flex>
        )}
        <Flex flexDir={"row"}>
          <Grid />
          <Chat />
        </Flex>
      </Center>
    );
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
