import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selector';

export const Navigations = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  return (
    <nav>
      <Button
        as={NavLink}
        colorScheme="green"
        _activeLink={{ bg: 'white', color: 'black' }}
        to="/"
      >
        Home
      </Button>
      {authenticated && (
        <Button
          as={NavLink}
          colorScheme="green"
          _activeLink={{ bg: 'white', color: 'black' }}
          marginLeft={4}
          to="/contacts"
        >
          Contacts
        </Button>
      )}
    </nav>
  );
};
