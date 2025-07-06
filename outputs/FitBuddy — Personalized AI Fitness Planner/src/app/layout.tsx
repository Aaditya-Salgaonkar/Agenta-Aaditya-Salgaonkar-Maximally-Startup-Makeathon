typescript
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

interface LayoutProps {
  children: React.ReactNode;
  clerkApiKey: string;
}

const Layout: React.FC<LayoutProps> = ({ children, clerkApiKey }) => {
  return (
    <ClerkProvider frontendApi={clerkApiKey}>
      <div className="flex">
        <aside className="bg-gray-800 text-white w-64">Sidebar</aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;