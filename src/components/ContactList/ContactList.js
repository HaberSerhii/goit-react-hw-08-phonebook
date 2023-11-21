import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { selectVisibleContacts, selectIsLoading, selectError } from "redux/contacts.selector";
import { Loader } from "components/Loader";
import { ErrorMsg } from "components/ErrorMessage/ErrorMessage";
import { Container, Flex } from "@chakra-ui/react";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
        <Container maxW='1280px'>
            <Flex as='ul' flexDirection='column' alignItems='center' mb={4} mt={4} gap={4}>
            {isLoading && <Loader />}
            {error && <ErrorMsg />}
            {contacts.map(contact => {
                return (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}/>   
                )
            })}
            </Flex>
        </Container>
    )
}