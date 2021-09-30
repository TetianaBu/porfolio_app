import styles from '../components/styles/Projects.module.css';
import Project from './Project';

export default function Projects() {
  return (
    <section id="projects" className={styles.wrapper}>
      <Project />
    </section>
  );
}
