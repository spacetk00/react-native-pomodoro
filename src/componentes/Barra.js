import React from 'react';
import {View, Box, Progress} from 'native-base';

export default function Barra(props) {
  return (
    <View>
      <Box w="150">
        <Progress value={props.porcentagem} />
      </Box>
    </View>
  );
}
