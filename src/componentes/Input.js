import React, {useState} from 'react';
import {Box, Input, Badge} from 'native-base';

import Texto from '../componentes/Texto';

export default function InputTempo(props) {
  const [enteredValue, setEnteredValue] = useState(props.minutos);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    props.mudarTexto(inputText);
  };

  let box;
  if (props.atividade) {
    box = (
      <Box alignItems="center" justifyContent="center">
        <Badge colorScheme="info" variant="outline">
          FOCO
        </Badge>
      </Box>
    );
  } else {
    box = (
      <Box alignItems="center" justifyContent="center">
        <Texto texto="Tempo de Foco" cor="lightBlue.200" />
        <Input
          textAlign="center"
          color="white"
          w="20%"
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          variant="underlined"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={String(enteredValue)}
        />
      </Box>
    );
  }
  if (props.descanso) {
    box = (
      <Box alignItems="center" justifyContent="center">
        <Badge colorScheme="info" variant="outline" w="50%">
          DESCANSO
        </Badge>
      </Box>
    );
  }

  return (
    <Box
      w="60%"
      h="20%"
      m="5"
      bg="darkBlue.900"
      alignItems="center"
      justifyContent="center"
      borderRadius="70"
      shadow="4"
      borderLeftWidth="8"
      borderRightWidth="8"
      borderColor="blue.500">
      {box}
    </Box>
  );
}
