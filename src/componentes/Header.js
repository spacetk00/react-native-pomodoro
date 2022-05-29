import React from 'react';
import {HStack, Icon, Heading} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <HStack
      space={3}
      w="100%"
      h="10%"
      justifyContent="center"
      alignItems="center"
      bg={{
        linearGradient: {
          colors: ['blue.700', 'blue.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      borderColor="blue.900"
      borderBottomWidth="10">
      <Heading
        size={{base: 'sm', md: 'md', lg: 'xl'}}
        fontSize={25}
        color="muted.100">
        Pomodoro
      </Heading>
      <Icon
        as={Ionicons}
        name="logo-react"
        color="muted.50"
        size={{base: 'md', md: 'md', lg: 'xl'}}
      />
    </HStack>
  );
}
