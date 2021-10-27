import styles from './styles/Menu.module.css';
import Nav from './Nav';
import SocialVidget from './SocialVidget';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <div className={styles.wide}>
      <div className={styles.menu}>
        <div className={styles.menuBtnWrapper}>
          <Link href="/">
            <a className={styles.backToHome}>
              <Image
                priority
                src="/images/home.png"
                height={14}
                width={14}
                alt="social"
              />
            </a>
          </Link>
        </div>
        <Nav />{' '}
      </div>
    </div>
  );
}
