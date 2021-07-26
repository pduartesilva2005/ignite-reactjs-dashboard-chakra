import NextAuth, { Session } from 'next-auth';
import Providers from 'next-auth/providers';
import { USER_RESPONSE_AUTHENTIFICATION } from '../../../mocks/__fixtures__/authFixtures';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      name: 'GitHub',
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
    Providers.Credentials({
      name: 'Credentials',
      authorize: async credentials => {
        try {
          const { user } = USER_RESPONSE_AUTHENTIFICATION;

          if (user) return { status: 'success', data: user };
        } catch (e) {
          alert('Erro');
          throw new Error(e.message);
        }
      }
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        return true;
      } catch {
        return false;
      }
    }
  }
});
