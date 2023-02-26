import { useContext, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ChatInput from "./ChatInput";
import { SocketContext } from "../../../contexts/SocketContext";

import Message from "./Message";

function Chat() {
  const [messages, setMessages] = useState([
    { message: "this is a message", name: "bob" },
    { message: "this is a message", name: "bob" },
  ]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessages((prevData) => {
        return [...prevData, data];
      });
    });
  }, []);

  return (
    <Flex
      w={400}
      h={550}
      ml={10}
      borderWidth={2}
      borderStyle={"groove"}
      position={"relative"}
      flexDir={"column"}
    >
      {messages.map((item, index) => {
        return (
          <Message
            message={item.message}
            name={item.name}
            mine={item?.mine}
            key={index}
          />
        );
      })}

      <ChatInput setMessages={setMessages} />
    </Flex>
  );
}

export default Chat;
