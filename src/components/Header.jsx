import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'1'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Pulp Fiction</DrawerHeader>
          <DrawerBody>
            <VStack align={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to="/">Home</Link>
              </Button>

              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/upload'}>Upload Vidoes</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              w={'full'}
              bottom={'10'}
              left={'0'}
              justifyContent={'center'}
            >
              <Button colorScheme={'purple'} variant={'outline'}>
                <Link to="/login">Log In</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'outline'}>
                <Link to="/register">Register</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
