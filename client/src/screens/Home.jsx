import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Stack,
  Spacer,
} from "@chakra-ui/react";

import { SocketContext } from "../contexts/SocketContext";

function Home() {
  const socket = useContext(SocketContext);
  const createRoom = async () => {
    const roomID = crypto.randomUUID();
    await socket.emit("create_room", roomID);
    navigate("/game/" + roomID);
  };



  const navigate = useNavigate();
  return (
    <Flex align={"center"} flexDir={"column"}>
      <Heading color="facebook.400" m={20} fontSize={100}>
        Susfall{" "}
      </Heading>
      <Stack spacing={4} direction="column" align="center">
        <Button
          colorScheme="facebook"
          fontSize={30}
          size="lg"
          _hover={{ opacity: 0.85 }}
          onClick={() => {
            createRoom();
          }}
        >
          Host New Game
        </Button>
        <Spacer />
        <Button
          colorScheme="facebook"
          fontSize={30}
          size="lg"
          _hover={{ opacity: 0.85 }}
        >
          Join Game
        </Button>
      </Stack>
    </Flex>
  );
}

export default Home;
