import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Header } from './App.styled';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';

export const App = () => {
  return (
    <>
      <Header>
        <NavLink to="/phonebook">Phonebook</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </Header>
      <Routes>
        <Route path="/phonebook" element={<Phonebook />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};
