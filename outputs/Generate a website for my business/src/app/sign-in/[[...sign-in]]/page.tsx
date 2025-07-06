import React from "react";
import { ClerkProvider, SignIn, SignUp, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <ClerkProvider frontendApi="your-frontend-api">
      <SignedIn>
        <div>Welcome!</div>
      </SignedIn>
      <SignedOut>
        <SignIn path="/sign-in" routing="path" />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;