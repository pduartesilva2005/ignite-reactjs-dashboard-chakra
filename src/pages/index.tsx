import { Flex, Button, Stack, Box } from "@chakra-ui/react";
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/client';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

   const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${window.location.origin}/dashboard`
    })
   }

  return (
    <Flex w="100vw" h="80vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input error={errors.email} type="email" name="email" label="E-mail" {...register('email')} />
          <Input error={errors.password} type="password" name="password" label="Senha" {...register('password')} />
        </Stack>

        <Button isLoading={formState.isSubmitting} type="submit" marginTop="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
      <Box mt="auto" marginLeft="-290px">
        <Button isLoading={formState.isSubmitting} onClick={() => signIn('github')} marginTop="6" size="lg" colorScheme="twitter">
          Entrar com gitHub
        </Button>
      </Box>
    </Flex>
  );
}