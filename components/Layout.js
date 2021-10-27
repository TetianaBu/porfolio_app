import styles from './styles/Layout.module.css';
import Head from 'next/head';
import Menu from './Menu';

export const siteTitle = 'Tetiana Buchok | Web Developer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/T.png" />
        <meta
          name="description"
          content="Tetiana Buchok | Front-End Developer | React Developer"
        />
        <meta
          property="og:image"
          // content={}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="" />
      </Head>
      <Menu />
      <main>{children}</main>
    </>
  );
}
