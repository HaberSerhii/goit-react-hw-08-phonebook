import { Box, Container, Flex } from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigations } from 'components/Navigations/Navigations';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selector';

export const AppBar = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <Box as="header" bgColor={'transparent'} position={'sticky'} zIndex={'100'}>
      <Container maxW="1280px">
        <Flex p={7} justifyContent="space-between" alignItems="center">
          <Navigations />
          {authenticated ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
};
