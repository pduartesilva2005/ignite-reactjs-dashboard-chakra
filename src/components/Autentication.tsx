import { Flex, Button } from '@chakra-ui/react';

export function Authentication() {
  return (
    <>
      <Flex
        direction="column"
        mx="auto"
        m="4"
        px="6"
        align="center"
        justify="center"
        color="yellow"
        fontWeight="bold"
        fontSize="4xl"
      >
        Favor efetuar o Login para ter acesso.
      </Flex>
      <Flex
        marginTop="6"
        size="lg"
        align="center"
        justify="center"
        direction="column"
        mx="auto"
        m="4"
        px="6"
      >
        <Button as="a" href="http://localhost:3000" colorScheme="pink">
          Voltar para Login
        </Button>
      </Flex>
    </>
  );
}
