typescript
// src/components/Settings.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUpdateUserMutation } from '../../generated/graphql';
import { CurrentUser } from '../../types';

interface FormData {
  name: string;
  email: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
});

export const Settings: React.FC = () => {
  const router = useRouter();
  const [updateUser, { loading }] = useUpdateUserMutation();
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const currentUser = (router.query.id as string) || '';

  const onSubmit = async (data: FormData) => {
    try {
      await updateUser({
        variables: {
          input: {
            id: currentUser,
            name: data.name,
            email: data.email,
          },
        },
      });
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" ref={register} defaultValue={currentUser} />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" ref={register} defaultValue={currentUser} />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit" disabled={loading}>
          Update Profile
        </button>
      </form>
    </div>
  );
};