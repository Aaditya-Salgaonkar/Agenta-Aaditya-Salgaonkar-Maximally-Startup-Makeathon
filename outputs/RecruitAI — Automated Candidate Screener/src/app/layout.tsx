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
        <aside className="bg-gray-800 text-white p-6 w-64">
          <h2 className="text-2xl font-bold mb-4">Navigation</h2>
          <nav>
            <ul>
              <li>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block py-2">
                  Resumes
                </a>
              </li>
              <li>
                <a href="#" className="block py-2">
                  Job Posts
                </a>
              </li>
              <li>
                <a href="#" className="block py-2">
                  Analytics
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;