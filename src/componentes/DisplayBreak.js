import React from 'react';
import {Box, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Texto from '../componentes/Texto';

export default function DisplayBreak() {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['blue.400', 'blue.900'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      rounded="xl"
      borderBottomLeftRadius="50"
      borderTopRightRadius="50"
      shadow="8">
      <Texto texto="Faça uma breve pausa" cor="lightBlue.200" />
      <Box m="1%" p="3%" bg="blue.900" rounded="xl" shadow="4">
        <Icon as={Ionicons} name="hand-right-outline" color="lightBlue.200" />
      </Box>
      <Texto texto="Para retornar ao timer" cor="muted.100" />
      <Texto texto="pressione o botão abaixo" cor="muted.100" />
    </Box>
  );
}
