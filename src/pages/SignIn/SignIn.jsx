import { signIn } from 'redux/Auth/authOperations';
import { SignForm } from './SignIn.styled';
import { useDispatch } from 'react-redux';

export const SignIn = () => {
  const dispatch = useDispatch();
  const handleSign = event => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    dispatch(signIn({ email, password }));
    event.currentTarget.reset();
  };

  return (
    <SignForm onSubmit={handleSign}>
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
