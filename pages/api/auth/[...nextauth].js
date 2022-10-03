import { verifyPassword } from '@/helpers/auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from 'prisma/user';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await getUser(credentials.email);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const isValidPassword = await verifyPassword(
            credentials.password,
            user.password
          );
          if (!isValidPassword) {
            throw new Error('User or password not valid');
          }

          return { email: user.email };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error('User or password not valid');
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
