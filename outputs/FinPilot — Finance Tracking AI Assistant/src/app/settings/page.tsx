typescript
// settings.tsx

import React from 'react';
import { useHistory } from 'react-router-dom';

import clerkClient from 'clerk-sdk-node';

import { Container, Form, Heading, Button, TextInput, Section } from 'react-neu';

import { UserProfileUpdate } from '../../types/clerk';

const Settings: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState<UserProfileUpdate>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await clerkClient.users.updateUser(form);
      history.push('/dashboard');
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Heading>Settings</Heading>
      <Form onSubmit={handleSubmit}>
        <Section>
          <TextInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            disabled={loading}
          />
          <TextInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            disabled={loading}
          />
        </Section>
        <Section>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
          />
          <TextInput
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
            disabled={loading}
          />
        </Section>
        <Button type="submit" loading={loading}>
          Update Profile
        </Button>
      </Form>
    </Container>
  );
};

export default Settings;