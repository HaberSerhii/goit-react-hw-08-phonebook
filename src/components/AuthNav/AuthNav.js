import { Button, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Flex justifyContent="end" gap="4">
      <Button
        as={NavLink}
        to="/register"
        colorScheme="green"
        _activeLink={{ bg: 'white', color: 'black' }}
      >
        Реєстрація
      </Button>
      <Button
        as={NavLink}
        to="/login"
        colorScheme="green"
        _activeLink={{ bg: 'white', color: 'black' }}
      >
        Авторизація
      </Button>
    </Flex>
  );
};
