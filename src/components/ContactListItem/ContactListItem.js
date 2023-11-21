import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { Box, Button, Card, CardBody, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <Card as="li" w="40%" bg="rgba(0, 0, 0, 0.6)">
      <CardBody
        display="flex"
        justifyContent="space-around"
        gap={'20px'}
        alignItems="center"
      >
        <Text color="white" fontWeight="500" fontSize={20}>
          {name}:
        </Text>
        <Box display="flex" gap={7}>
          <Text color="white" fontWeight="500" fontSize={20}>
            {number}
          </Text>
          <Button
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
            colorScheme="green"
            _hover={{ bg: 'red' }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};
