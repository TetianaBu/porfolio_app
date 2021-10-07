import styles from './styles/Contact.module.css';
import Image from 'next/dist/client/image';
import placeImg from '../public/images/social/placeholder.png';
import avatar from '../public/images/profile.jpg';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.avatarWrapper}>
        <Image
          priority
          src={avatar}
          className={styles.borderCircle}
          layout="responsive"
          alt="TT"
        />
        <address className="address">
          <a className={styles.placeImg}>
            <Image src={placeImg} height={10} width={10} alt="social" />
          </a>
          Cracow, Poland
        </address>
      </div>
      < className={styles.contactText}>
      The fastes way to contact me is to write an email to{' '}
        <a href="mailto:tetianataker@gmail.com">tetianataker@gmail.com</a>{' '}
        or reach me on{' '}
        <a href="https://www.linkedin.com/in/tetiana-buchok/">Linkedin</a>. There you also can find information about what I was doing before switching to programing. Also I’m in{' '}
        <a href="https://www.linkedin.com/in/tetiana-buchok/">GitHub</a> and {' '}
        <a href="https://www.linkedin.com/in/tetiana-buchok/">Codepen</a>.
      </p>
      <a className={styles.pseudoButton} href="mailto:tetianataker@gmail.com">
        Get in touch
      </a>
    </section>
  );
}
