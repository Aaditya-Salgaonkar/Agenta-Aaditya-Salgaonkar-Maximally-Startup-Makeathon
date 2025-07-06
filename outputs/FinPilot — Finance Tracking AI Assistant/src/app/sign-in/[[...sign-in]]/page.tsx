typescript
// Import ClerkProvider and useUser from clerk-react
import { ClerkProvider, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

// Define User interface
interface User {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  publicMetadata?: {
    imageUrl?: string;
  };
}

// Define SignInPageProps interface
interface SignInPageProps {
  children?: React.ReactNode;
}

// SignInPage component with useUser hook
const SignInPage: React.FC<SignInPageProps> = ({ children }) => {
  const { isSignedIn, user } = useUser();

  // Check if user is signed in, render children if true
  if (isSignedIn) {
    const userData: User = {
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      publicMetadata: user.publicMetadata,
    };

    return <>{children}</>;
  }

  // If user is not signed in, render Clerk's sign-in form
  return (
    <div>
      <SignedOut>
        <ClerkProvider>
          <h1>Sign in to access your AI-based assistant</h1>
        </ClerkProvider>
      </SignedOut>
    </div>
  );
};

export default SignInPage;