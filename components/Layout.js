import styles from './styles/Layout.module.css';
import Head from 'next/head';
import MenuBtn from './MenuBtn';
import MenuSide from './MenuSide';

export const siteTitle = 'Tetiana Buchok | Web Developer';

export default function Layout({ children }) {
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

      <div className={styles.menuSide}>
        <MenuSide />
      </div>

      <main>{children}</main>
      <div className={styles.menu}>
        <MenuBtn />
      </div>
    </div>
  );
}
