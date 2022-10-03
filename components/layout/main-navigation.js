import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import classes from './main-navigation.module.css';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function MainNavigation() {
  const router = useRouter();
  const signOutHandler = async () => {
    const result = await signOut({
      redirect: false,
      callbackUrl: '/',
    });
    router.push(result.url);
  };
  const { status } = useSession();
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {status === 'unauthenticated' && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}

          {status === 'authenticated' && (
            <Fragment>
              <li>
                <Link href='/profile'>Profile</Link>
              </li>
              <li>
                <button onClick={signOutHandler}>Sign out</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
