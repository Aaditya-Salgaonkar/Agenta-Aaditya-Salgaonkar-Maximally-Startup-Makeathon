import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <ClerkProvider frontendApi="your-frontend-api">
      <div>
        <SignedOut>
          <h1>Sign In</h1>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <h1>Welcome, {useUser().firstName}!</h1>
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}

export default SignInPage;