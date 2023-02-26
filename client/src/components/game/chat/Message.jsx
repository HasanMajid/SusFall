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
          borderTopLeftRadius={mine ? 20 : 0}
          borderTopRightRadius={mine ? 0 : 20}
          backgroundColor={mine ? "orange.500" : "blue.600"}
        >
          <Text color={"white"} fontSize={18} fontWeight={'semibold'}>{message}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Message;
