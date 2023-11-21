import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts.selector';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Box,
} from '@chakra-ui/react';

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Будь-ласка введіть латинські літери')
        .required(`Обов'язкове поле`),
      number: Yup.string()
        .min(5, 'Не менше 5-ти символів')
        .matches(
          /^[0-9\-+']+$/,
          'Будь-ласка введіть за прикладом 063-123-45-67'
        )
        .required(`Обов'язкове поле`),
    }),
    onSubmit: (values, actions) => {
      const check = contacts.some(({ name }) => name === values.name);
      if (check) {
        alert.error(`${values.name} вже доданий до контактів`);
        return;
      }
      const newContact = {
        name: values.name,
        number: values.number,
      };
      dispatch(addContacts(newContact));
      actions.resetForm();
    },
  });
  return (
    <Flex justify="center" paddingTop={'175px'} marginBottom={'30px'}>
      <Box p={5} rounded="md" bgColor="rgba(0, 0, 0, 0.55)">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={5}>
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name" color={'white'}>
                Ім'я та прізвище
              </FormLabel>
              <Input
                name="name"
                id="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                color={'white'}
                _placeholder={{ color: 'smokewhite' }}
                placeholder="Введіть ім'я та прізвище"
                width={450}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.number && formik.errors.number}
            >
              <FormLabel htmlFor="number" color={'white'}>
                Номер телефону
              </FormLabel>
              <Input
                name="number"
                id="number"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                color={'white'}
                _placeholder={{ color: 'smokewhite' }}
                placeholder="Введіть номер телефону"
              />
              <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              bgColor="rgb(34,139,34,0.85)"
              color="white"
              _hover={{ bg: 'green' }}
              marginBottom={'15px'}
            >
              Додати контакт
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
