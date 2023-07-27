import {
  Container,
  VStack,
  Text,
  Button,
  Heading,
  Input,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const SignUp = () => {
  return (
    <Container h={'100vh'} MaxW={['full', 'container.xl']} p={'16'}>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'16'}
      >
        <Heading>Pulp Fiction</Heading>
        <Avatar alignSelf={'center'} size={'xl'}></Avatar>
        <Input
          type={'name'}
          placeholder="Name"
          focusBorderColor="purple.500"
          required
        />
        <Input
          type={'email'}
          placeholder="Email"
          focusBorderColor="purple.500"
          required
        />
        <Input
          type={'password'}
          placeholder="Password"
          focusBorderColor="purple.500"
          required
        />
        <Button colorScheme={'purple'}>Register</Button>
        <Text alignSelf={'flex-end'} colorScheme={'purple.500'}>
          Already signed up?{' '}
          <Button variant={'link'}>
            <Link to={'/login'}>Login</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default SignUp;
