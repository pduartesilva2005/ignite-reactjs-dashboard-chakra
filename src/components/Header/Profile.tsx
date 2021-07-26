import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Duarte</Text>
          <Text color="gray.300" fontSize="small">
            pduartesilva2005@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Duarte"
        src="https://github.com/pduartesilva2005.png"
      />
    </Flex>
  );
}
