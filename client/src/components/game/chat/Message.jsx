import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Message({ name, message, mine }) {
  return (
    <Flex
      position={"relative"}
      justifyContent={mine ? "flex-end" : "flex-start"}
      w={"100%"}
      mt={4}
    >
      <Flex flexDir={"column"} maxWidth="70%">
        <Text fontWeight={"bold"} fontSize={18}>
          {name}
        </Text>

        <Box
          p="4"
          bg="gray.700"
          wordBreak="break-word"
          h={"fit-content"}
          m={1}
          borderRadius={20}
          borderTopLeftRadius={0}
        >
          <Text color={"white"}>{message}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Message;
