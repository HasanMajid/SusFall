import { useRef, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";

function NameInput({ setName }) {
  const [currentName, setCurrentName] = useState('')
  return (
    <Flex
      m={"auto"}
      mt={100}
      justifyContent={"center"}
      flexDir={"column"}
      width={200}
      height={160}
      borderWidth={2}
      borderRadius={10}
      backgroundColor={"facebook.700"}
      shadow={"md"}
    >
      <Heading fontSize={20} fontWeight={"bold"} color={"white"} mt={1}>
        Enter name to continue:
      </Heading>
      <Flex m={2}>
        <Input
          size="sm"
          borderRadius={10}
          placeholder={"name"}
          backgroundColor={"white"}
          fontWeight={"bold"}
          _placeholder={{ color: "facebook.600", fontWeight: "bold" }}
          onChange={(e) => {
            e.preventDefault();
            setCurrentName(e.target.value)
          }}
          color={"facebook.600"}
          autoFocus={true}
        />
      </Flex>
      <Button
        m={"auto"}
        w={"auto"}
        mb={1}
        mt={2}
        onClick={(e) => {
          setName(currentName)
        }}
      >
        Enter
      </Button>
    </Flex>
  );
}

export default NameInput;
