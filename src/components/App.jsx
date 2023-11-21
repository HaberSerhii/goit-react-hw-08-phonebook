import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Header } from './App.styled';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn } from 'redux/Auth/authSelectors';
import { signOut } from 'redux/Auth/authOperations';

export const App = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const dispatch = useDispatch();
  return (
    <>
      <Header>
        {isSignedIn ? (
          <>
            <NavLink to="/phonebook">Phonebook</NavLink>
            <button
              type="button"
              onClick={() => {
                dispatch(signOut());
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </Header>
      <Routes>
        <Route path="/phonebook" element={<Phonebook />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};
