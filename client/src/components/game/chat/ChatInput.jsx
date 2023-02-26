import { useState, useContext } from "react";
import { Input, Flex, Button } from "@chakra-ui/react";
import { GameContext } from "../../../contexts/GameContext";
import { SocketContext } from "../../../contexts/SocketContext";

function ChatInput({ setMessages }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const { name } = useContext(GameContext);
  const socket = useContext(SocketContext);

  const sendMessage = () => {
    if (currentMessage !== "") {
      socket.emit("send_message", { message: currentMessage, name: name });
      setCurrentMessage("");
      setMessages((prevData) => {
        return [
          ...prevData,
          { name: name, message: currentMessage, mine: true },
        ];
      });
    }
  };

  return (
    <Flex position={"absolute"} bottom={0} w="100%">
      <Input
        justifySelf={"flex-end"}
        borderRadius={20}
        borderColor={"blue.400"}
        onChange={(e) => {
          setCurrentMessage(e.target.value);
        }}
        value={currentMessage}
      />
      <Button
        borderRadius={"0%"}
        onClick={() => {
          sendMessage();
        }}
      >
        &#9658;
      </Button>
    </Flex>
  );
}

export default ChatInput;
