import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import NavigationSidebar from './NavigationSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <div className="flex">
        <NavigationSidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;