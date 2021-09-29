import styles from './styles/Layout.module.css';
import Head from 'next/head';
import Menu from './Menu';

export const siteTitle = 'Tetiana Buchok | Web Developer';

export default function Layout({children}) {
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
      <div className={styles.menuClosed}></div>
      <main>{children}</main>
    </div>
  );
}
