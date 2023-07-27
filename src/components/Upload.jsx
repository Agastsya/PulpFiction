import React from 'react';
import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
const Upload = () => {
  return (
    <Container h={'100vh'} p={'16'}>
      <VStack color={'purple.400'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'20vmax'} />
        <HStack>
          <Input
            required
            type="file"
            css={{
              '&::file-selector-button': {
                border: 'none',
                width: 'calc(100% + 66px)',
                height: 'calc(100% + 35px)',
                margin: '-18px',
                cursor: 'pointer',
                color: 'purple',
                backgroundColor: 'white',
              },
            }}
          />
          <Button colorScheme={'purple'} type={'submit'}>
            Upload
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Upload;
