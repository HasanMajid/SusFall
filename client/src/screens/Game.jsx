import React, { useState, useEffect, useRef, useContext } from "react";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";

import { GameContext } from "../contexts/GameContext";

import NameInput from "../components/game/NameInput";
import { useParams } from "react-router-dom";

function Game() {
  const { players, roomExist, setName, name, setRoom } =
    useContext(GameContext);

  const { room } = useParams();
  useEffect(() => {
    setRoom(room);
  }, []);

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
        {players.map((item, index) => {
          return <Text key={index}>{item.name}</Text>;
        })}
      </Flex>
    </Center>
  );
}

export default Game;
