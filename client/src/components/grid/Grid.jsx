import React, { useEffect } from "react";
import { SimpleGrid, Box, Image, Center, Card } from "@chakra-ui/react";
import GameCard from "./card/GameCard";
import locations, { locationNames } from "../../constants/locations";

function Grid() {
  return (
    <SimpleGrid spacing={5} m={"auto"} minChildWidth={180} maxW={1000}>
      {Object.values(locations).map((location, index) => {
        return (
          <GameCard key={index} img={location} name={locationNames[index]} />
        );
      })}
    </SimpleGrid>
  );
}

export default Grid;
