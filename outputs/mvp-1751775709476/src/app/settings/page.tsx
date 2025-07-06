import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

function SettingsPage() {
  const { user, isLoaded: userIsLoaded } = useUser();
  const [formState, setFormState] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  useEffect(() => {
    if (user) {
      setFormState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
  }, [user]);

  // ...
}