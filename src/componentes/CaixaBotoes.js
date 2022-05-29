import React from 'react';
import {HStack, View} from 'native-base';

import Botao from './Botao';

export default function CaixaBotoes(props) {
  return (
    <View height="20%">
      {props.descanso ? (
        <HStack justifyContent="center" alignItems="center" flex="1">
          <Botao acao={props.pararDescanso} icone="reload-outline" />
        </HStack>
      ) : (
        <HStack space={3} justifyContent="center" alignItems="center" flex="1">
          <Botao acao={props.iniciar} icone="play-outline" />
          <Botao acao={props.pausar} icone="pause-outline" />
          <Botao acao={props.parar} icone="stop-outline" />
        </HStack>
      )}
    </View>
  );
}
