import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  VStack,
  Input,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Container maxW={['full', 'container.xl']} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'strech'}
          type="email"
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Email"
            focusBorderColor={'purple.500'}
            required
            type={'email'}
          />

          <Input
            placeholder="Password"
            focusBorderColor={'purple.500'}
            required
            type={'password'}
          />

          <Button color={'purple.500'} variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgotpassword'}>Forgot Password?</Link>
          </Button>
          <Button colorScheme={'purple'}>Login</Button>
          <Text alignSelf={'flex-end'}>
            New Here?
            <Button colorScheme={'purple'} variant={'link'} px={'2'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
