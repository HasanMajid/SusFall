import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Grid from "../components/grid/Grid";
import locations, { locationNames } from "../constants/locations";

function Tutorial() {
  const image = locationNames[Math.floor(Math.random() * locationNames.length)];
  console.log(locations[image]);
  return (
    <Center flexDir={"column"} m={5}>
      <Image
        src={locations[image]}
        w={500}
        shadow={"dark-lg"}
        borderWidth={2}
        borderRadius={10}
      />
      <Heading m={2}>{image}</Heading>
      <Grid />
    </Center>
  );
}

export default Tutorial;
