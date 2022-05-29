import React from 'react';
import {Box, Text} from 'native-base';
import Barra from '../componentes/Barra';

export default function Display(props) {
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
      shadow="4">
      <Text
        color={props.ativo ? 'lightBlue.100' : 'lightBlue.200'}
        bold
        fontSize={{
          base: '5xl',
          md: '5xg',
          lg: '6xl',
        }}>
        {props.conteudo}
      </Text>
      <Box>
        <Barra porcentagem={props.porcentagem} />
      </Box>
    </Box>
  );
}
