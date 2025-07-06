import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from 'next-themes';
import NavigationSidebar from './NavigationSidebar';

const Layout = ({ children }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <ThemeProvider attribute="class">
        <div className="flex">
          <NavigationSidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default Layout;