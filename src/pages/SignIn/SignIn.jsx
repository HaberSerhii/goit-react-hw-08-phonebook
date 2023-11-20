import { SignForm } from './SignIn.styled';

export const SignIn = () => {
  const handleSign = event => {
    event.preventDefault();
    const formEmail = event.currentTarget.email.value;
    const formPassword = event.currentTarget.password.value;
    console.log({ formEmail, formPassword });
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
