import Link from "next/dist/client/link"
import utilStyles from '../styles/utils.module.css';

export default function BackToHome(){
  return (
  <Link href="/">
    <a className={utilStyles.regularBtn}>Back to home</a>
  </Link>
  )
}