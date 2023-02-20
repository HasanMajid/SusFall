import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { GameContext } from "../../contexts/GameContext";
import { SocketContext } from "../../contexts/SocketContext";
import locations, {locationNames} from "../../constants/locations";

function StartButton({ isDisabled }) {
  const image = locationNames[Math.floor(Math.random() * locationNames.length)];
  const socket = useContext(SocketContext);
  const startGame = () => {
    socket.emit("start_game", {image: image});
  };
  return (
    <Button
      backgroundColor={"green.700"}
      width={200}
      m={"auto"}
      isDisabled={isDisabled}
      onClick={()=>{
        console.log('clicked start')
        startGame()
      }}
    >
      Start Game
    </Button>
  );
}

export default StartButton;
