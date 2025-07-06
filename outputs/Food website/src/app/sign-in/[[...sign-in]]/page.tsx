import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

<ClerkProvider frontendApi="your-frontend-api">
  <SignedIn>
    {({ user }) => (
      <div>
        Welcome, {user.firstName} {user.lastName}!
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )}
  </SignedIn>
  <SignedOut>
    <RedirectToSignIn />
  </SignedOut>
</ClerkProvider>