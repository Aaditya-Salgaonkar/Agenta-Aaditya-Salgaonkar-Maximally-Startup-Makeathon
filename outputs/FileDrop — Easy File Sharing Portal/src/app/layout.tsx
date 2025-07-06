typescript
// layout.tsx

import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider frontendApi='your-clerk-frontend-api'>
      <div className='flex'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;