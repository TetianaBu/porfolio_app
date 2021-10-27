import Link from "next/dist/client/link";
import styles from './styles/Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.Navigation}>
          <Link href="/skills">skills</Link>
          <Link href="/projects">projects</Link>
          <Link href="/contact">contact</Link>
          <Link href="/about">about</Link>
          <Link href="/blog">blog</Link>
    </div>
  );
}