import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { AppRouter } from '@/components/AppRouter';

const Layout = () => {
  return (
    <ClerkProvider frontendApi='your-clerk-frontend-api'>
      <nav>
        <ul>
          <li>
            <AppRouter path="dashboard" name="Dashboard" />
          </li>
          <li>
            <AppRouter path="projects" name="Projects" />
          </li>
          <li>
            <AppRouter path="billing" name="Billing" />
          </li>
          <li>
            <AppRouter path="analytics" name="Analytics" />
          </li>
          <li>
            <AppRouter path="settings" name="Settings" />
          </li>
        </ul>
      </nav>
      <main>
        {/* Your page components will be rendered here */}
      </main>
    </ClerkProvider>
  );
};

export default Layout;