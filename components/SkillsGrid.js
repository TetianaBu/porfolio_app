import styles from '../components/styles/SkillsGrid.module.css';

export default function SkillsGrid() {
  return (
    <div className={`${styles.wrapper} ${styles.grid}`}>
      <div className={`${styles.item} ${styles.html}`}>HTML5</div>
      <div className={`${styles.item} ${styles.javaScript}`}>JS</div>
      <div className={`${styles.item} ${styles.js}`}></div>
      <div className={`${styles.item} ${styles.git}`}>Git</div>
      <div className={`${styles.item} ${styles.react}`}>React</div>
      <div className={`${styles.item} ${styles.js}`}>MongoDB</div>
      <div className={`${styles.item} ${styles.js}`}>SQL</div>
      <div className={`${styles.item} ${styles.js}`}></div>
      <div className={`${styles.item} ${styles.js}`}>GraphQL</div>
      <div className={`${styles.item} ${styles.js}`}>Python</div>
      <div className={`${styles.item} ${styles.js}`}></div>
      <div className={`${styles.item} ${styles.js}`}>Django</div>
      <div className={`${styles.item} ${styles.js}`}>SEO</div>
      <div className={`${styles.item} ${styles.css}`}>CSS</div>
      <div className={`${styles.item} ${styles.js}`}></div>
      <div className={`${styles.item} ${styles.js}`}>Bootstrap</div>
      <div className={`${styles.item} ${styles.js}`}></div>
      <div className={`${styles.item} ${styles.js}`}>Webpack</div>
      <div className={`${styles.item} ${styles.js}`}></div>
      <div className={`${styles.item} ${styles.nextjs}`}>Next.js</div>
    </div>
  );
}
