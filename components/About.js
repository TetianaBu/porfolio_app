import styles from '../components/styles/About.module.css';

export default function About() {
  return (
    <article id="about" className={styles.halfedGrid}>
      <div>
        <h3>About</h3>
        <p>
          Items are evenly distributed in the line with equal space around them.
          Note that visually the spaces aren’t equal, since all the items have
          equal space on both sides. The first item will have one unit of space
          against the container edge, but two units of space between the next
          item because that next item has its own spacing that applies.
        </p>
      </div>
    </article>
  );
}

{
  /* <>

<h1 className={utilStyles.heading2Xl}>{name}</h1>
</> */
}
