import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Center,
} from "@chakra-ui/react";
import beach from "../../../assets/classroom.jpg";

function GameCard({ img, name }) {
  return (
    <Card
      width={190}
      height={170}
      _hover={{ cursor: "pointer", shadow: "lg", height: 173, width: 193 }}
    >
      <CardBody>
        <Center flexDir={"column"}>
          <Image src={img} width={190} height={122} />
          <Heading size={"md"}>{name}</Heading>
        </Center>
      </CardBody>
    </Card>
  );
}

export default GameCard;
