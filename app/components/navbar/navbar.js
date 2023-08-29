'use client'

import Link from 'next/link'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const pathname = usePathname();

  return(
    <div className={styles.main}>
        <Link href='/' className={pathname === '/' ? styles.selectedTab : styles.unselectedTab}> Home </Link>
        <Link href='/mission' className={pathname === '/mission' ? styles.selectedTab : styles.unselectedTab}> Mision </Link>
        <Link href='/vision' className={pathname === '/vision' ? styles.selectedTab : styles.unselectedTab}> Vision </Link>
        <Link href='/capabilities' className={pathname === '/capabilities' ? styles.selectedTab : styles.unselectedTab}> Capabilities </Link>
        <Link href='/tools' className={pathname === '/tools' ? styles.selectedTab : styles.unselectedTab}> Tools </Link>
    </div>

)
}
