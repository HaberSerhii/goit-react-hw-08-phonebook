import { signUp } from 'redux/Auth/authOperations';
import { SignForm } from './SignUp.styled';
import { useDispatch } from 'react-redux';

export const SignUp = () => {
  const dispatch = useDispatch();
  const handleSign = event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    console.log({ name, email, password });
    dispatch(signUp({ name, email, password }));
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

      <button type="submit">Sign Up</button>
    </SignForm>
  );
};
