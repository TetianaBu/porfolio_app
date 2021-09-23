import utilStyles from '../styles/utils.module.css';
import BackToHome from '../components/BackToHome';

export default function Game() {
  return (
    <section className={utilStyles.centeredGrid}>
      <h1>SOOON!</h1>
      <BackToHome />
    </section>
  );
}
