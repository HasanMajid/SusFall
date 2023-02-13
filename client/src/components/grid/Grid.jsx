import React, { useEffect } from "react";
import { SimpleGrid, Box, Image, Center } from "@chakra-ui/react";
import GameCard from "./card/Card";

function Grid() {
  return (
    <SimpleGrid spacing={5} m={"auto"} minChildWidth={130} maxW={800} >
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      {/* <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box> */}
    </SimpleGrid>
  );
}

export default Grid;
