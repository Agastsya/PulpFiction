import React, { Component } from 'react';
import { Box, Container, Input, VStack, Stack, Center } from '@chakra-ui/react';

class Test extends Component {
  n = 'agastsya';

  render() {
    return (
      <Box h={'100vh'}>
        <Stack
          direction={'column'}
          h={'80vh'}
          justifyContent={'center'}
          align={'center'}
        >
          <VStack w={'60'}>
            <Input type={'email'} w={'60'} placeholder="Email" />
          </VStack>
          <VStack w={'60'}>
            <Input type={'password'} w={'60'} placeholder="Password" />
          </VStack>
        </Stack>
      </Box>
    );
  }
}

export default Test;
