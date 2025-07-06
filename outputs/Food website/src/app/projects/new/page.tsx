import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { createProject } from '../../lib/prisma';

const schema = yup.object().shape({
  name: yup.string().required('Project name is required'),
});

export default function NewProjectForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await createProject(data);
      // handle successful form submission
    } catch (error) {
      console.error(error);
      // handle error during form submission
    }
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} w="full" maxW="md" spacing={6}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Project Name</FormLabel>
        <Input id="name" placeholder="Enter project name" {...register('name')} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="blue" size="lg" isLoading={formState.isSubmitting}>
        Create Project
      </Button>
    </VStack>
  );
}