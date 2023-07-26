import React from 'react';
import { Stack, HStack, VStack, Text } from '@chakra-ui/react';
import { Box, Container, Heading, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          w={'fit-content'}
          py={'2'}
          textTransform={'uppercase'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          alignItems={'center'}
          h={'full'}
          direction={['column', 'row']}
          p={'4'}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(90deg)'}
          ></Image>
          <Text letterSpacing={'widest'} lineHeight={'8'} px={'10'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
