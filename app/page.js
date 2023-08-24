import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/navbar.js'

export default function Home() {
  return (
    <main className={styles.contents}>
     <h2>Welcome To Our Home Page!</h2>
     <h3>This site is under construction. Full website coming soon.</h3>
    </main>
  )
}
