import { Box, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

const Videos = () => {
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'100%'}>
        <video
          controls
          controlsList="nodownload"
          src=""
          style={{ width: '100%' }}
        ></video>
      </VStack>
    </Stack>
  );
};

export default Videos;
