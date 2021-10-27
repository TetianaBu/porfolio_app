import styles from '../components/styles/Skills.module.css';
import SkillsGrid from '../components/SkillsGrid';

export default function Skills() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.skillsText}>
        <div className={styles.hugeText}>
          <h3>Skills</h3>
        </div>
        <div className={styles.secondChild}>
          <p className={styles.description}>
            The primary tools that I use are React and Next.JS. Besides that,
            I’m interested in exploring other JavaScript libraries/frameworks.
            Apart from Front-End, I have a general understanding of Node.js and
            Express.js. For styling, I mostly rely on CSS3, but I’m familiar
            with SASS and CSS-in-JS as well. Lets take a look at some examples
            at projects section.
          </p>
        </div>
        <SkillsGrid />
      </div>
    </section>
  );
}
