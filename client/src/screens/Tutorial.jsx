import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Center,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Tutorial() {
  return (
    <Center
      flexDir={"column"}
      m={"auto"}
      w={"50vw"}
      // h={"100vh"}
      p={4}
      borderWidth={2}
      justifyContent={"flex-start"}
    >
      <Heading>Game Overview:</Heading>
      <Text>
        Susfall is a social deduction game in which players take on different
        roles and try to determine who among them is the spy. Players use the
        chat feature to ask each other questions in an attempt to identify the
        spy or blend in as a regular player.
      </Text>
      <br />

      <Heading>Number of Players</Heading>
      <p>The game is played with 3-10 players.</p>
      <br />
      <br />

      <Heading>Game Setup</Heading>
      <OrderedList justifyContent={"flex-start"} textAlign={'left'}>
        <ListItem >
          Choose a random location from the list of locations and a random
          player to be the spy. The spy does not know the location.
        </ListItem>
        <ListItem >
          Determine the game time. Typically, games last for 8-10 minutes, but
          this can be adjusted to the preference of the players.
        </ListItem>
        <ListItem >Decide who will start the game.</ListItem>
      </OrderedList>

      <br />
      <Heading>Gameplay</Heading>
      <Text>
        The game is played in rounds, with each round consisting of players
        taking turns asking each other questions. The objective of the game is
        for the players to identify the spy or for the spy to blend in and not
        be identified.
      </Text>
      <br />

      <OrderedList textAlign={'left'}>
        <ListItem>
          The first player starts the game by asking another player a question
          related to the location. For example, if the location is a bank, the
          question could be, "What is your favorite type of bank account?"
        </ListItem>
        <ListItem>
          The player who was asked the question then has to answer, trying to
          give a believable response that doesn't give away their role or
          identity.
        </ListItem>
        <ListItem>
          Play continues with players taking turns asking each other questions
          until the timer runs out or until a player makes an accusation.
        </ListItem>
        <ListItem>
          If a player thinks they have identified the spy, they can make an
          accusation. They must state who they think the spy is and explain why.
          If they are correct, the game ends and the regular players win. If
          they are incorrect, the game continues and the spy has a chance to
          make their own accusation.
        </ListItem>
        <ListItem>
          If the spy makes an accusation and correctly identifies the location,
          the spy wins. If the spy is unable to identify the location or if a
          regular player correctly identifies the spy, the regular players win.
        </ListItem>
      </OrderedList>
      <br />
      <Heading>End of Game:</Heading>
      <Text>
        The game ends when either the regular players or the spy wins. Players
        can choose to play multiple rounds and switch up roles to keep the game
        interesting.
      </Text>
      <br />

      <Heading>Tips and Strategies:</Heading>
      <UnorderedList textAlign={'left'} >
        <ListItem >
          As a regular player, try to ask questions that will help you identify
          other players' roles without giving away your own identity.
        </ListItem>
        <ListItem>
          As the spy, try to blend in and not draw attention to yourself. Pay
          close attention to the questions being asked and try to match your
          responses to the location.
        </ListItem>
        <ListItem>
          Take notes throughout the game to help you remember what each player
          said and to keep track of your guesses.
        </ListItem>
        <ListItem>
          Pay attention to the time and try to make an accusation before it runs
          out.
        </ListItem>
      </UnorderedList>
    </Center>
  );
}

export default Tutorial;
