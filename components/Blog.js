import styles from './styles/Blog.module.css';

export default function Blog({ children }) {
  return (
    <section id="blog" className={styles.postsGrid}>
      {children}
    </section>
  );
}
