import React from 'react';
import {Box, Pressable, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Botoes(props) {
  return (
    <Pressable onPress={props.acao}>
      {({isPressed}) => {
        return (
          <Box
            mt={isPressed ? '1' : '0'}
            shadow={isPressed ? '6' : '3'}
            bg={isPressed ? 'blue.400' : 'blue.900'}
            p="5"
            borderRadius="full"
            borderWidth="5"
            borderColor={isPressed ? 'blue.200' : 'blue.500'}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.9 : 1,
                },
              ],
            }}>
            <Icon
              as={Ionicons}
              name={props.icone}
              color="blue.100"
              size={{base: 'xs', md: 'sm', lg: 'md'}}
            />
          </Box>
        );
      }}
    </Pressable>
  );
}
