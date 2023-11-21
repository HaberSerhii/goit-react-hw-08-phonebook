import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      bgImage="url('https://images5.alphacoders.com/456/456536.jpg')"
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      align="center"
      justify="center"
      height="150vh"
      position={'relative'}
      top={'-150'}
    ></Box>
  );
}
