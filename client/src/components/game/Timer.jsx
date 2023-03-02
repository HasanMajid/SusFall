import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(7);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (minutes === 0 && seconds === 0) return;
    setTimeout(() => {
      if (seconds === 0) {
        setSeconds(60);
        setMinutes(minutes - 1);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  return (
    <Flex fontSize={30} fontWeight={"bold"}>
      <Text mr={3} color={"orange.500"}>
        Timer:
      </Text>
      <Text letterSpacing={3}>
        {minutes}:{seconds}
      </Text>
    </Flex>
  );
}

export default Timer;
