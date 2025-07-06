typescript
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import clerkClient from 'clerk-sdk';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  title: string;
  currentCompany: string;
  location: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  title: yup.string().required(),
  currentCompany: yup.string().required(),
  location: yup.string().required(),
});

const SettingsPage: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = async (data: FormData) => {
    try {
      const user = await clerkClient.users.updateUser({
        userId: 'user_id', // replace with actual user id
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddresses: [{ email: data.email, isPrimary: true }],
        phoneNumbers: [{ phoneNumber: data.phoneNumber, isPrimary: true }],
        customUserAttributes: {
          title: data.title,
          currentCompany: data.currentCompany,
          location: data.location,
        },
      });

      console.log('User updated:', user);
      history.push('/dashboard'); // replace with your dashboard route
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          ref={register}
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.firstName?.message}</div>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          ref={register}
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.lastName?.message}</div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          ref={register}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          ref={register}
          className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">
          {errors.phoneNumber?.message}
        </div>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          ref={register}
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.title?.message}</div>

        <label htmlFor="currentCompany">Current Company</label>
        <input
          type="text"
          name="currentCompany"
          ref={register}
          className={`form-control ${
            errors.currentCompany ? 'is-invalid' : ''
          }`}
        />
        <div className="invalid-feedback">
          {errors.currentCompany?.message}
        </div>

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          ref={register}
          className={`form-control ${errors.location ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.location?.message}</div>

        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;