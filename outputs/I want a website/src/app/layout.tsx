import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import NavigationSidebar from '../components/NavigationSidebar';

function Layout({ children }) {
  return (
    <ClerkProvider frontendApi='your-clerk-frontend-api'>
      <div className='flex'>
        <NavigationSidebar />
        <main className='flex-1'>{children}</main>
      </div>
    </ClerkProvider>
  );
}

export default Layout;