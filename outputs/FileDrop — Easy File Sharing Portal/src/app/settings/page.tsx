typescript
// SettingsPage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ClerkProvider, useClerk, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

interface SettingsFormData {
  firstName: string;
  lastName: string;
  email: string;
}

const SettingsPage: React.FC = () => {
  const router = useRouter();
  const { user, updateUserProfile } = useClerk();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.emailAddresses[0].emailAddress || '',
    },
  });

  const onSubmit = async (data: SettingsFormData) => {
    if (user) {
      await updateUserProfile.mutateAsync({
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddresses: [
          {
            emailAddress: data.email,
            id: user.emailAddresses[0].id,
          },
        ],
      });

      router.replace('/settings');
    }
  };

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div>
        <h1>Settings</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" {...register('firstName')} />
          {errors.firstName && <p>{errors.firstName.message}</p>}

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" {...register('lastName')} />
          {errors.lastName && <p>{errors.lastName.message}</p>}

          <label htmlFor="email">Email</label>
          <input id="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </SignedIn>
  );
};

const AppWithClerk: React.FC = () => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <SettingsPage />
    </ClerkProvider>
  );
};

export default AppWithClerk;