import { FormContact } from 'components/FormContact/FormContact';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsSlice';

import { Box } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    >
      <FormContact />
      <SearchFilter />
      <ContactList />
    </Box>
  );
}
