
import styles from '../components/styles/Intro.module.css';
import Image from 'next/dist/client/image'
import Link from "next/dist/client/link";

export default function Intro() {
  return (
    <header id="home">
    <div className={styles.wide}>
    <div className={styles.intro}>
    <p className={styles.upheading}>Hi, there! My name is</p>
    <h1>Tetiana Buchok and I’m <span className={styles.animated}>Front-End Developer</span></h1>
    <p className={styles.subheading}>I’m focused on creating apps using React and Next.js. Currently I’m looking for Junior/Trainee Front-End Developer role in Cracow or remote.</p>
    <Link href="/resume.pdf"><a className={styles.resumeBtn}>Grab Resume</a></Link>
    <Link href="/game"><a className={styles.gameBtn}>Play Game</a></Link>
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