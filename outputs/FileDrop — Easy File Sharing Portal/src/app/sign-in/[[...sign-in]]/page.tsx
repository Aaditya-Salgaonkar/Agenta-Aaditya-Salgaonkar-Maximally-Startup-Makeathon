typescript
// src/components/SignIn.tsx

import React from 'react';
import { useUser } from '@clerk/clerk-react';

interface SignInProps {
  onSignIn: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    onSignIn();
    return <div>Welcome, {user?.firstName}!</div>;
  }

  return (
    <div>
      <h2>Sign In</h2>
      <a href="/sign-in">Sign In with Clerk</a>
    </div>
  );
};

export default SignIn;