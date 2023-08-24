import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar(){
    return(
          <div className={styles.main}>
            <Link href='/'> Home </Link>
            <Link href='/mission'> Mission </Link>
            <Link href='/vision'> Vision </Link>
            <Link href='/capabilities'> Capabilities </Link>
            <Link href='/tools'> Tools </Link>
          </div>
    )
  }