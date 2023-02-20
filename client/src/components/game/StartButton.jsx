import { useContext, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { GameContext } from "../../contexts/GameContext";
import { SocketContext } from "../../contexts/SocketContext";
import { locationNames } from "../../constants/locations";

function StartButton({ isDisabled }) {
  const socket = useContext(SocketContext);
  const { players } = useContext(GameContext);

  const startGame = () => {
    const image =
      locationNames[Math.floor(Math.random() * locationNames.length)];
    const spy = players[Math.floor(Math.random() * players.length)].id;

    console.log("spy:", spy);
    socket.emit("start_game", { image: image, spy: spy });
  };
  return (
    <Button
      backgroundColor={"green.700"}
      width={200}
      m={"auto"}
      isDisabled={isDisabled}
      onClick={() => {
        console.log("clicked start");
        startGame();
      }}
    >
      Start Game
    </Button>
  );
}

export default StartButton;
