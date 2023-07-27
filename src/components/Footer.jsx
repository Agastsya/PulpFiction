import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to get the latest news
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              border={'none'}
              placeholder="Insert Your Email"
              focusBorderColor={'none'}
              borderRadius={'none'}
            />
            <Button
              colorScheme={'purple'}
              variant={'ghost'}
              p={'4'}
              borderRadius={'0px 20px 20px 0'}
              border={'none'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '2px solid white']}
          borderRight={['none', '2px solid white']}
        >
          <Heading>Pulp Fiction</Heading>
          <Text>All Rights Reserved to Agastsya</Text>
        </VStack>

        <VStack w={'full'} borderRight={['none', '2px solid white']}>
          <Heading> Follow us </Heading>
          <HStack>
            <a href="https://www.youtube.com" color={'purple'}>
              <AiFillYoutube />
            </a>
            <a href="https://www.youtube.com">
              <AiFillInstagram />
            </a>
            <a href="https://www.youtube.com">
              <AiOutlineTwitter />
            </a>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
