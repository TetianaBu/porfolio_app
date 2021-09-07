import Head from 'next/head';
import Image from 'next/image';
import styles from './styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import SocialVidget from './SocialVidget';
import Menu from './Menu';

const name = 'Tetiana Buchok';
export const siteTitle = 'Tetiana Buchok | Web Developer';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/T.png" />
        <meta name="description" content="Personal website !!!" />
        <meta
          property="og:image"
          // content={}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="" />
      </Head>

      <Menu />
      <div className={styles.menuFake}></div>
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
