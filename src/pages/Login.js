import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authSlice';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(7, 'Повинно бути не менше 7 символів')
        .required(`Обов'язково`),
      email: Yup.string()
        .email('Невірний формат електронної адреси')
        .required(`Обов'язково`),
    }),
    onSubmit: (values, actions) => {
      dispatch(loginThunk(values));
      actions.resetForm();
    },
  });

  return (
    <Flex
      bgImage="url('https://images5.alphacoders.com/456/456536.jpg')"
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      align="center"
      justify="center"
      height="150vh"
      position={'relative'}
      top={'-150'}
    >
      <Box bgColor="rgba(0, 0, 0, 0.55)" p={6} rounded="md" w={300}>
        <Text
          as="h2"
          textAlign="center"
          fontSize={30}
          fontWeight={700}
          mb={5}
          color="White"
        >
          Авторизація
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={10} align="flex-start">
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel htmlFor="email">
                <Text color="White">Електрона адреса</Text>
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                bgColor={'rgba(255, 255, 255, 0.6)'}
                fontSize={'15'}
                fontWeight={'500'}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <FormLabel htmlFor="password">
                <Text color="White">Пароль</Text>
              </FormLabel>
              <Input
                id="password"
                name="password"
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                bgColor={'rgba(255, 255, 255, 0.6)'}
                fontSize={'15'}
                fontWeight={'500'}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              bgColor="rgb(34,139,34,0.85)"
              color="black"
              width="full"
              _activeLink={{ bg: 'green', color: 'white' }}
            >
              Авторизуватись
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
