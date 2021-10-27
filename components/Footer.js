import styles from '../components/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&#169; Tetiana Buchok</p>
      <p>
        {' '}
        icons from <a href="https://www.flaticon.com/">Flaticon</a>
      </p>
    </footer>
  );
}
