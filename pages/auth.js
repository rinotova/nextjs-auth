import { getSession } from 'next-auth/react';
import AuthForm from '../components/auth/auth-form';

function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        permanent: true,
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
};
