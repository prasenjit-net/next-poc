import { signIn, signOut, useSession } from 'next-auth/client';
import { NextSeo } from 'next-seo'
import styles from '../styles/Auth.module.css';

export default function Page() {
    const [session, loading] = useSession();

    return <>
        <NextSeo
            title="Simple Usage Example"
            description="A short description goes here."
        />
        {!session && <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>}
        {session && <>
            <img src={session.user.image} className={styles.profileImage} />
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>}
    </>
}