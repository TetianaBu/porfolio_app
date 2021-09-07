
import styles from '../components/styles/Intro.module.css';

import Nav from '../components/Nav';
//    <Nav />
export default function Intro() {
  return (
    <header id="home">



    <div className={styles.wide}>
    <div className={styles.intro}>
    <p className={styles.upheading}>Introduction</p>
    <h1>This is a sample website - you’ll be building</h1>
    <p className={styles.subheading}>This is a sample website - you’ll be building a site like this on. This is a sample website - you’ll be building a site like this on. This is a sample website - you’ll be building a site like this on</p>
    <button className={styles.resumeBtn}>Grab Resume</button>
    <button className={styles.gameBtn}>Play Game</button>
    </div>

    <div className={`${styles.introInteractive} ${styles.dashed}`}> ... </div>
    </div>

 <div className={styles.scrollDownWrapper}><span className={styles.scrollDown}>scroll down</span></div>

    </header>
  )
}

//{`${utilStyles.headingMd} ${utilStyles.padding1px}`}