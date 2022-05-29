import React from 'react';
import {PresenceTransition, View} from 'native-base';

import Display from '../Display';

export default function DisplayTransition(props) {
  return (
    <View m="5" w="70%" h="30%">
      <PresenceTransition
        visible={!props.descanso}
        initial={{
          opacity: 0,
          scale: 0,
          translateX: 200,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: 0,
          transition: {
            duration: 300,
          },
        }}>
        <Display
          conteudo={props.conteudo}
          porcentagem={props.porcentagem}
          ativo={props.ativo}
        />
      </PresenceTransition>
    </View>
  );
}
