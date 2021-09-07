import styles from '../components/styles/Projects.module.css';
import Image from 'next/dist/client/image';
import Project from './Project';
//      <Project />

export default function Projects() {
  return (
    <section id="projects" className={styles.wrapper}>
      <Project />
    </section>
  );
}

//      <div className={styles.header}><h3>Projects</h3></div>
//      <div className={styles.project5}> Project 5</div>
//<div className={styles.project6}> Project 6</div>