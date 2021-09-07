import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import styles from './styles/SocialVidget.module.css';


export default function SocialVidget() {
  return (
    <ul className={styles.vidgetWrapper}>
      <li className={styles.socialImgWrapper}>
        <a href="https://github.com/TetianaBu">
          <Image
            priority
            src="/images/social/github.png"
            className={styles.socialImg}
            height={14}
            width={14}
            alt="social"
          />
        </a>
      </li>
      <li className={styles.socialImgWrapper}>
        <a href="https://www.linkedin.com/in/tetiana-buchok/">
          <Image
            priority
            src="/images/social/linkedin.png"
            className={styles.socialImg}
            height={14}
            width={14}
            alt="social"
          />
        </a>
      </li>
      <li className={styles.socialImgWrapper}>
        <a href="https://twitter.com/tetataker">
          <Image
            priority
            src="/images/social/twitter.png"
            className={styles.socialImg}
            height={14}
            width={14}
            alt="social"
          />
        </a>
      </li>
      <li className={styles.socialImgWrapper}>
        <a href="mailto:tetianataker@gmail.com">
          <Image
            priority
            src="/images/social/mail.png"
            className={styles.socialImg}
            height={14}
            width={14}
            alt="social"
          />
        </a>
      </li>

      <li className={styles.socialImgWrapper}>
        <a href="https://codepen.io/tetianabu">
          <Image
            priority
            src="/images/social/codepen.png"
            className={styles.socialImg}
            height={14}
            width={14}
            alt="social"
          />
        </a>
      </li>
    </ul>
  );
}
