import { Box, Text } from '@chakra-ui/react';
import videoBg from '../assets/videoBg.mp4';

export default function Home() {
  return (
    <Box position={'relative'} top={'-150'} height={'100%'}>
      <Box
        position={'absolute'}
        top={'0'}
        left={'0'}
        width={'100%'}
        height={'100%'}
        bgColor={'rgba(0,0,0,0.6)'}
      ></Box>
      <video src={videoBg} muted autoPlay loop />
      <Box
        fontFamily={'Impact'}
        position={'absolute'}
        width={'100%'}
        height={'100%'}
        top={'0'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        color={'white'}
      >
        <Text fontWeight={'700'} fontSize={'30px'}>
          Привіт, ласкаво прошу до моєї
        </Text>
        <Text fontWeight={'400'} fontSize={'20px'}>
          Телефоної книги
        </Text>
      </Box>
    </Box>
  );
}
