import { Fragment } from 'react';
import styles from '../components/styles/Projects.module.css';
import Project from './Project';

export default function Projects() {
  return (
    <section className={styles.innerWrapper}>
      <div className="width">

        <div id="projects" className={styles.wrapper}>
          <Project />
        </div>
      </div>
    </section>
  );
}
