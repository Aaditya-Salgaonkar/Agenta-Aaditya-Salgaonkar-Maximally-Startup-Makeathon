typescript
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

interface LayoutProps {
  children: React.ReactNode;
  // You can add more props here as per your requirement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <div className="flex h-screen overflow-hidden bg-white">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-800" aria-label="Sidebar">
          {/* Add your sidebar content here */}
        </nav>

        {/* Content area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {children}
          {/* Add your main content here */}
        </div>
      </div>
    </ClerkProvider>
  );
};

export default Layout;