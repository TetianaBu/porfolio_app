import styles from './styles/404.module.css';
import Image from 'next/dist/client/image';
import Head from 'next/head';

export default function Error() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/T.png" />
        <meta name="description" content="Personal website !!!" />
        <meta
          property="og:image"
        />
        <meta name="og:title" content="'Tetiana Buchok | Web Developer" />
        <meta name="twitter:card" content=""/>
      </Head>
      <section className={styles.errorWrapper}>
        <div className={styles.asteroidsWrapper}>
          <div className={styles.img}>
            <Image
              priority
              src="/images/T.png"
              height={14}
              width={14}
              alt="social"
            />{' '}
          </div>
          <div className={styles.img}>
            <Image
              priority
              src="/images/T.png"
              height={38}
              width={38}
              alt="social"
            />{' '}
          </div>
          <div className={styles.img}>
            <Image
              priority
              src="/images/T.png"
              height={24}
              width={24}
              alt="social"
            />{' '}
          </div>
        </div>
        <h1 className={styles.message}>404. Page not found</h1>
      </section>
    </div>
  );
}
