
import styles from '../components/styles/Intro.module.css';
import Image from 'next/dist/client/image'

export default function Intro() {
  return (
    <header id="home">
    <div className={styles.wide}>
    <div className={styles.intro}>
    <p className={styles.upheading}>Introduction</p>
    <h1>This is a sample website - you’ll be building</h1>
    <p className={styles.subheading}>This is a sample website - you’ll be building a site like this on. This is a sample website - you’ll be building a site like this on. This is a sample website - you’ll be building a site like this on</p>
    <a href="/game" className={styles.resumeBtn}>Grab Resume</a>
    <a href="/game" className={styles.gameBtn}>Play Game</a>
    </div>
    <div>
    <div className={styles.asteroid}>
            <Image
              priority
              src="/images/T.png"
              height={38}
              width={38}
              alt="social"
            />{' '}
          </div>
    </div>
    </div>
    </header>
  )
}