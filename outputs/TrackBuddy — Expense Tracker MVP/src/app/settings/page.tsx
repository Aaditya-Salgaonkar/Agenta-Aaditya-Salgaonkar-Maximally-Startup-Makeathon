typescript
// SettingsPage.tsx

import React from 'react';
import { useHistory } from 'react-router-dom';
import clerkCalls from '../api/clerk';

interface SettingsPageProps {}

interface UserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const history = useHistory();
  const [userProfile, setUserProfile] = React.useState<UserProfile>({});

  const fetchUserProfile = async () => {
    const user = await clerkCalls.getUser();
    setUserProfile(user);
  };

  const updateUserProfile = async (field: string, value: string) => {
    await clerkCalls.updateUser({
      [field]: value,
    });
    fetchUserProfile();
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={userProfile.firstName || ''}
          onChange={(e) => updateUserProfile('firstName', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={userProfile.lastName || ''}
          onChange={(e) => updateUserProfile('lastName', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userProfile.email || ''}
          onChange={(e) => updateUserProfile('email', e.target.value)}
        />
      </div>
    </div>
  );
};

export default SettingsPage;