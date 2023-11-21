import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/authSlice';
import { PrivateRoute } from './PrivateRoute';
import { RestictedRoute } from './RestictedRoute';
import { selectAuthIsLoading } from 'redux/auth.selector';
import { Loader } from './Loader';



const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsLoading);

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch]);

  return (
    isRefreshing ? (<Loader />) :
      (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path='/register' element={
              <RestictedRoute redirectTo='/contacts' component={<RegisterPage />} />
            } />
            
            <Route path='/login' element={
              <RestictedRoute redirectTo='/contacts' component={<LoginPage />} />
            } />
           
            <Route path='/contacts' element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            } />
            
          </Route>
        </Routes>
      ))
};
    

