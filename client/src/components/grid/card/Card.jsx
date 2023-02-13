import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Center} from "@chakra-ui/react";
import beach from "../../../assets/beach.jpg";

function GameCard() {
  return (
    <Card width={150} height={170}>
      <CardBody>
        <Center flexDir={'column'}>
        <Image src={beach} width={120} height={120} />
        <Heading size={'md'}>Beach</Heading>
        </Center>
      </CardBody>
    </Card>
  );
}

export default GameCard;
