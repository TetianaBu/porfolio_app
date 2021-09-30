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
      <p className={styles.contactText}>
        The fastest way is to djfksdkf kdlsjf fjdkfjdkjsljf df{' '}
        <a href="mailto:tetianataker@gmail.com">tetianataker@gmail.com</a>{' '}
        dsjkdhfksdfhj l or right me on{' '}
        <a href="https://www.linkedin.com/in/tetiana-buchok/">Linkedin</a> There
        you also can find info about my previous experience. Of course Im in{' '}
        <a href="https://www.linkedin.com/in/tetiana-buchok/">GitHub</a> and{' '}
        <a href="https://www.linkedin.com/in/tetiana-buchok/">Codepen</a>.
      </p>
      <a className={styles.pseudoButton} href="mailto:tetianataker@gmail.com">
        Get in touch
      </a>
    </section>
  );
}
