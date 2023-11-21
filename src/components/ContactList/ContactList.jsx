import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/Contacts/contactsSelectors';
import { ContactsAddedList } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactsAddedList>
      {contacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ContactsAddedList>
  );
};
