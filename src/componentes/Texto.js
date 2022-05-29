import React from 'react';
import {Text} from 'native-base';

export default function Texto(props) {
  return (
    <Text
      textAlign="center"
      color={props.cor}
      bold
      fontSize={{
        base: 'sm',
        md: 'md',
        lg: 'xl',
      }}>
      {props.texto}
    </Text>
  );
}
