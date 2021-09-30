import styles from './styles/MenuWide.module.css';
import stylesMenu from './styles/Menu.module.css';

import Nav from './Nav';
import SocialVidget from './SocialVidget';
import Link from 'next/link';
import Image from 'next/image';
//        <button className={styles.menuBtn}>&#x2715;</button>

export default function MenuWide() {
  return (
    <div className={styles.menu}>
        <div className={stylesMenu.menuBtnWrapper} >
          <Link href="/">
            <a className={stylesMenu.backToHome}>
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
      <Nav />
      <SocialVidget />
    </div>
  );
}
