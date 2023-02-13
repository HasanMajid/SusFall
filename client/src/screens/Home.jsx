import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Stack,
  Spacer,
} from "@chakra-ui/react";

function Home() {
  return (
    <Flex align={"center"} flexDir={"column"}>
      <Heading color="facebook.400" m={20} fontSize={100}>
        Susfall{" "}
      </Heading>
      <Stack spacing={4} direction="column" align="center">
        <Button colorScheme="facebook" fontSize={30} size="lg" _hover={{opacity:0.85}}>
          Host New Game
        </Button>
        <Spacer />
        <Button colorScheme="facebook" fontSize={30} size="lg" _hover={{opacity:0.85}}>
          Join Game
        </Button>
      </Stack>
    </Flex>
  );
}

export default Home;
