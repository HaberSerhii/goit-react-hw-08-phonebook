import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
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
import { registerThunk } from 'redux/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(`Обов'язково`),
      password: Yup.string()
        .min(7, 'Пароль повинен бути не менше 7 символів')
        .required(`Обов'язково`),
      email: Yup.string()
        .email('Невірний формат електронної адреси')
        .required(`Обов'язково`),
    }),
    onSubmit: (values, actions) => {
      dispatch(registerThunk(values));
      actions.resetForm();
    },
  });

  return (
    <Flex
      bgImage="url('https://images5.alphacoders.com/456/456536.jpg')"
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      align="center"
      justifyContent="center"
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
          Реєстрація
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={10} align="flex-start">
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">
                <Text color="White">Ім'я</Text>
              </FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                bgColor={'rgba(255, 255, 255, 0.6)'}
                fontSize={'15'}
                fontWeight={'500'}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

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
                type="password"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                bgColor={'rgba(255, 255, 255, 0.6)'}
                color={'black'}
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
              Зареєструватись
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
