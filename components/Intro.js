import styles from '../components/styles/Intro.module.css';
import Link from 'next/dist/client/link';

export default function Intro() {
  return (
    <header className={styles.home}>
      <div className={styles.wide}>
        <div className={styles.intro}>
          <p className={styles.upheading}>Hello, there!</p>
          <h1>Are you looking for Front-End Developer?</h1>
          <p className={styles.subheading}>
            My name is Tetiana and I’m looking for a great team to join. This
            site is my place to experiment — here you can find out how many satellites are orbiting Earth right now, some info about my skills
            and more.
          </p>
          <Link href="/resume.pdf">
            <a className={styles.resumeBtn}>Grab Resume</a>
          </Link>
          <Link href="/game">
            <a className={styles.gameBtn}>Play Game</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
