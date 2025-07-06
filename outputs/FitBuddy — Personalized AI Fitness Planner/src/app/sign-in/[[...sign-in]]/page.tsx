typescript
// src/components/SignIn.tsx

import React from 'react';
import { useUser, useAuthenticated, withClerk, ClerkProvider } from '@clerk/clerk-react';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const { isSignedIn, signIn, signUp, sessionId } = useUser();
  const authenticated = useAuthenticated();

  if (authenticated) {
    return <div>You are already signed in.</div>;
  }

  if (isSignedIn) {
    return <div>Redirecting to home...</div>;
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn.start({ strategy: 'email' })}>Sign In with Email</button>
      <button onClick={() => signUp.start({ strategy: 'email' })}>Sign Up with Email</button>
    </div>
  );
};

const WrappedSignIn = withClerk(SignIn);

const SignInPage: React.FC = () => {
  return (
    <ClerkProvider frontendApi='your-frontend-api'>
      <WrappedSignIn />
    </ClerkProvider>
  );
};

export default SignInPage;