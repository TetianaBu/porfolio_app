import styles from '../components/styles/SkillsGrid.module.css';

export default function SkillsGrid() {
  return (
    <div className={styles.sticky}>
      <div className={`${styles.wrapper} ${styles.grid}`}>
        <div className={`${styles.item} ${styles.secondColor} ${styles.html}`}>
          HTML5
        </div>
        <div
          className={`${styles.item} ${styles.firstColor}  ${styles.javaScript}`}
        >
          JS
        </div>
        <div className={`${styles.item} ${styles.firstColor}  ${styles.css}`}>
          CSS
        </div>

        <div className={`${styles.item} ${styles.firstColor} ${styles.react}`}>
          React
        </div>
        <div className={`${styles.item} ${styles.secondColor} ${styles.sql}`}>
          Databases
        </div>
        <div className={`${styles.item} ${styles.firstColor} ${styles.nextjs}`}>
          Next.js
        </div>

        <div
          className={`${styles.text} ${styles.firstColor} ${styles.graphql}`}
        >
          technologies I’ve been working with recently
        </div>
        <div
          className={`${styles.item} ${styles.firstColor} ${styles.graphql}`}
        >
          GraphQL
        </div>

        <div className={`${styles.item} ${styles.secondColor} ${styles.js}`}>
          Bootstrap
        </div>
        <div
          className={`${styles.item} ${styles.firstColor} ${styles.webpack}`}
        >
          Webpack
        </div>
        <div className={`${styles.item} ${styles.secondColor} ${styles.git}`}>
          Git
        </div>

        <div className={`${styles.item} ${styles.secondColor} ${styles.js}`}>
          Python
        </div>
        <div className={`${styles.item} ${styles.secondColor} ${styles.seo}`}>
          SEO
        </div>
      </div>
    </div>
  );
}
