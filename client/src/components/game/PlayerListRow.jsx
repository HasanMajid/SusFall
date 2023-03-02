import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function PlayerListRow({ players }) {
  console.log(players);
  return (
    <Flex flexDir={"row"} m={2} alignItems={"center"}>
      <Text fontSize={24} mr={4} fontWeight={'bold'}>Players:</Text>
      {players.map((player) => (
        <PlayerCircle name={player.name} />
      ))}
    </Flex>
  );
}

const PlayerCircle = ({ name }) => {
  console.log(name);
  return (
    <Box
      p={5}
      backgroundColor={"gray.200"}
      color={"black"}
      borderRadius={30}
      fontSize={21}
      fontWeight={"semibold"}
      m={1}
    >
      {name}
    </Box>
  );
};

export default PlayerListRow;
