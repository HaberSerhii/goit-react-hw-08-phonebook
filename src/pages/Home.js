import { Box } from '@chakra-ui/react';
import videoBg from '../assets/videoBg.mp4';

export default function Home() {
  return (
    <Box position={'relative'} top={'-150'}>
      <video
        src={videoBg}
        muted
        autoPlay
        loop
        position={'relative'}
        top={'-150'}
      />
    </Box>
  );
}
