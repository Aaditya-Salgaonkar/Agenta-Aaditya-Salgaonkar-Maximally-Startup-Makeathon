typescript
// interfaces.ts

export interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

export interface ClerkUser extends User {
  publicMetadata: {
    avatar_url?: string;
  };
}