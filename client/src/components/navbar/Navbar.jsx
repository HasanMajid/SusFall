import { useEffect, useState } from "react";
import { Box, Flex, useColorMode, Switch, Image } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

import logo from '../../assets/Susfall.png'

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const [dark, setDark] = useState("false");

  useEffect(() => {
    toggleColorMode();
  }, [dark]);

  return (
    <Flex
      mt={4}
      pb={2}
      borderBottomWidth={2}
      justifyContent={"flex-end"}
      fontSize={20}
    >
      <Image src={logo} width={55} height={55} ml={10}  />
      <Box mr={"auto"} ml={"auto"}>
        {location.pathname}
      </Box>

      <Box>
        <Switch
          onChange={(e) => {
            setDark(!dark)
          }}
          size={"md"}
        />
      </Box>

      <Box
        ml={5}
        mr={7}
        fontWeight={location.pathname === "/" && "bold"}
        _hover={{ opacity: 0.85, cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Box>
      <Box
        ml={5}
        mr={7}
        fontWeight={location.pathname === "/tutorial" && "bold"}
        _hover={{ opacity: 0.85, cursor: "pointer" }}
        onClick={() => {
          navigate("/tutorial");
        }}
      >
        How to play
      </Box>
      <Box
        ml={5}
        mr={7}
        fontWeight={location.pathname === "/messages" && "bold"}
        _hover={{ opacity: 0.85, cursor: "pointer" }}
        onClick={() => {
          navigate("/messages");
        }}
      >
        Messages
      </Box>
    </Flex>
  );
}

export default Navbar;
