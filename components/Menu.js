import styles from './styles/Menu.module.css';
import Nav from '../components/Nav';
import SocialVidget from '../components/SocialVidget';

export default function Menu(){
  return (
    <div className={styles.menu}>
      <div className={styles.menuBtnWrapper}><button className={styles.menuBtn}>&#x2715;</button></div>
      <Nav />
      <SocialVidget />
    </div>
  )
}