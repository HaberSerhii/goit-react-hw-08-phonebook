import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/Contacts/contactsSelectors';
import { Container } from './Phonebook.styled';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactList/ContactList';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/Contacts/contactsOperations';

export function Phonebook() {
  const dispatch = useDispatch();
  const { fetchContacts } = contactsOperations;

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, fetchContacts]);

  return (
    <Container>
      <h1>Телефона книга</h1>
      <ContactsForm />
      <h2>Контакти</h2>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
      {error && <Error text={'Щось пішло не так, оновіть сторінку.'} />}
      {isLoading && <Loader />}
    </Container>
  );
}
