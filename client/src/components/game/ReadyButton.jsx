import { useContext, useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

import { SocketContext } from "../../contexts/SocketContext";

function ReadyButton({ room, isReady, id }) {
  const socket = useContext(SocketContext);
  const [ready, setReady] = useState(isReady);
  const sendReady = (changeReady) => {
    socket.emit("set_ready", { room: room, ready: changeReady });
  };

  useEffect(() => {
    setReady(isReady);
  }, [isReady]);

  return (
    <Button
      onClick={() => {
        sendReady(!ready);
        setReady(!ready);
      }}
      isDisabled={id !== socket.id}
      width={100}
      backgroundColor={ready ? 'green.400' : 'red.400'}
      _hover={{backgroundColor:ready ? 'green.400' : 'red.400'}}
    >
      {ready ? "ready" : "not ready"}
    </Button>
  );
}

export default ReadyButton;
