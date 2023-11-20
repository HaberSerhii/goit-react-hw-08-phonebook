import { signUp } from 'redux/Auth/authOperations';
import { SignForm } from './SignUp.styled';
import { useDispatch } from 'react-redux';

export const SignUp = () => {
  const dispatch = useDispatch();
  const handleSign = event => {
    event.preventDefault();
    const formName = event.currentTarget.name.value;
    const formEmail = event.currentTarget.email.value;
    const formPassword = event.currentTarget.password.value;
    console.log({ formName, formEmail, formPassword });
    dispatch(signUp({ formName, formEmail, formPassword }));
    event.currentTarget.reset();
  };

  return (
    <SignForm onSubmit={handleSign}>
      <label>
        Name:
        <input type="name" name="name" required></input>
      </label>
      <label>
        Email:
        <input type="email" name="email" required></input>
      </label>
      <label>
        Password:
        <input type="password" name="password" required></input>
      </label>

      <button type="submit">Sign In</button>
    </SignForm>
  );
};
