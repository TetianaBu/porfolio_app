import styles from '../components/styles/Skills.module.css';
import SkillsGrid from './SkillsGrid';

export default function Skills() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.skillsText}>
        <article>
        <h3>Skills</h3>
        <p>
          Items are evenly distributed in the line with equal space around them.
          Note that visually the spaces aren’t equal, since all the items have
          equal space on both sides. The first item will have one unit of space
          against the container edge, but two units of space between the next
          item because that next item has its own spacing that applies. 
          Here are some latest cert, that I did:
        </p>
          <ul className={styles.certificatesList}>
            <li><a href="" className={styles.certificatesLink}><small>One dskdlsdk dsmkds d dsdsd</small></a></li>
            <li><a href=""><small>One dskdlsdk dsmkds d dsdsd</small></a></li>
            <li><a href=""><small>One dskdlsdk dsmkds d dsdsd</small></a></li>
            <li><a href=""><small>One dskdlsdk dsmkds d dsdsd</small></a></li>
          </ul>
        </article>
      </div>
      <SkillsGrid />
    </section>
  );
}